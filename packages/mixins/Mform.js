import { filterElFormOption } from '../core/const'
import {
  hasOptionsByType,
  isWatchObj,
  type2Component,
  assignWatchObj,
  extElFormCompProps,
  extElFormItemProps,
  structuredWatchData,
  assignDictOptions,
  assignDisplay,
  assignDisabled,
  getResByAsyncObj,
  loadLazyFormItemOptions,
  getWatchPropValue,
  getDefDataWithColumn,
  deFormData,
  runWatchMethod
} from '../core/util'
import { isNull, deepClone } from '../util/util'
const defSpFormOption = {
  labelWidth: '80px',
  labelSuffix: '',
  labelPosition: 'right',
  cancelBtn: false,
  clearBtn: true,
  submitBtn: true,
  resetBtn: true,
  resetBtnTxt: '重置',
  submitBtnTxt: '提交',
  searchBtnTxt: '搜索',
  cancelBtnTxt: '取消',
  clearBtnTxt: '清空'
}
export default {
  data() {
    return {
      spFormList: [],
      spOption: {},
      form: {},
      allForm: {},
      unClearForm: {},
      remoteLoadingMap: {},
      formItemOptions: {},
      watchFormItemOptions: {},
      displayMap: {},
      watchDisplayMap: {},
      disabledMap: {},
      watchDisabledMap: {},
      asyncValueMap: {},
      ignoreForm: {}
    }
  },
  methods: {
    init(option, formType) {
      if (!option || !Array.isArray(option.column)) {
        return {}
      }
      const column = []
      // const form = {}
      const unClearProps = []
      const displayMap = {}
      const watchDisplayMap = {}
      const disabledMap = {}
      const watchDisabledMap = {}
      const remoteLoadingMap = {}
      const formItemOptions = {}
      const asyncFormItemOptions = {} // 要异步加载选项的字段（列
      const watchFormItemOptions = {} // 跟其他字段的选项是相同的字段（列)
      const asyncValueMap = {}
      const allForm = {}
      option.column.forEach(item => {
        const type = item.formType || item.type
        const component = type2Component(type)
        const prop = item.prop
        const elProps = extElFormCompProps(option, item)
        if (typeof item.remoteMethod === 'function') {
          remoteLoadingMap[prop] = false
          elProps.filterable = true
          elProps.remote = true
          elProps.defaultFirstOption = item.defaultFirstOption !== false
          elProps.remoteMethod = this.packRemoteMethod(item.remoteMethod, item.prop, this.data)
        }        
        const elFormItem = extElFormItemProps(option, item)
        if (item.rules) {
          elFormItem.rules = this.packRules(item.rules)
        }        
        const spColumnItem = {
          prop,
          label: item.label,
          component,
          span: item.span || 24,
          tip: item.tip,
          elProps,
          elFormItem
        }
        column.push(spColumnItem)
        
        allForm[prop] = hasOptionsByType(item.type) ? [] : ''
        // 保存默认为禁用的字段
        if (item.disabled || item.canClear === false) {
          unClearProps.push(item.prop)
        }

        assignDictOptions(item, formItemOptions, asyncFormItemOptions, watchFormItemOptions)
        assignDisplay(item, this.data, displayMap, watchDisplayMap)
        assignDisabled(item, this.data, disabledMap, watchDisabledMap, formType)
        if (isWatchObj(item.asyncValue)) {
          assignWatchObj(item.prop, item.asyncValue, asyncValueMap)
        }
      })
      const spOption = filterElFormOption(option)
      this.spOption = { ...defSpFormOption, ...spOption }
      this.spFormList = column
      this.displayMap = displayMap
      this.watchDisplayMap = watchDisplayMap
      this.watchDisabledMap = watchDisabledMap
      this.disabledMap = disabledMap
      this.remoteLoadingMap = remoteLoadingMap
      this.asyncValueMap = asyncValueMap
      this.formItemOptions = formItemOptions
      this.watchFormItemOptions = watchFormItemOptions
      this.allForm = allForm
      
      loadLazyFormItemOptions(this.data, this.option.column).then(optionsMap => {
        this.formItemOptions = { ...this.formItemOptions, ...optionsMap }
        const form = getDefDataWithColumn(this.data, this.option.column, this.formItemOptions)
        this.form = form
        this.allForm = { ...form }
        const unClearForm = {}
        unClearProps.forEach(prop => {
          unClearForm[prop] = form[prop]
        })
        this.unClearForm = unClearForm
        
        const data = deFormData(form, this.option.column, this.formItemOptions)
        this.watchDataChange(null, form)
        this.$nextTick(() => {
          this.$refs.form.clearValidate()
        })
        this.$emit('init-data', data)
      })
    },
    watchDataChange(prop, formData) {
      this.formItemOptionsWatch(prop, formData)
      this.valueWatch(prop, formData)
      this.disabledWatch(prop, formData)
      this.displayWatch(prop, formData)
    },
    formItemOptionsWatch(prop, formData) {
      let watch = null
      if (prop) {
        watch = this.watchFormItemOptions[prop]
      } else {
        watch = structuredWatchData(this.watchFormItemOptions)
      }
      
      const watchPromise = {}
      for (const tprop in watch) {
        const cloneData = deepClone(formData)
        const item = this.option.column.find(item => item.prop === tprop)
        const watchValue = getWatchPropValue(item.options, formData, this.formItemOptions)
        watchPromise[tprop] = watch[tprop](cloneData, prop, watchValue)
      }
      getResByAsyncObj(watchPromise).then(newFormItemoptions => {
        if (prop) {
          for(const prop in newFormItemoptions) {
            const oldFormValue = this.form[prop]
            let newFormValue = null
            if (Array.isArray(oldFormValue) && oldFormValue.length > 0) {
              newFormValue = oldFormValue.filter(val => {
                if (typeof val === 'string' || typeof val === 'number') {
                  return newFormItemoptions[prop].some(item => item.value === val)
                }
                return false
              })
            } else if (typeof oldFormValue === 'string' || typeof oldFormValue === 'number') {
              if (newFormItemoptions[prop].some(item => item.value === oldFormValue)) {
                newFormValue = oldFormValue
              }
            }
            if (newFormValue !== oldFormValue) {
              this.$set(this.form, prop, newFormValue)
            }
          }
        }
        this.formItemOptions = {...this.formItemOptions, ...newFormItemoptions}        
      })  
    },
    valueWatch(prop, data) {
      const formData = runWatchMethod(prop, data, 'asyncValue', this.asyncValueMap, this.option.column, this.formItemOptions)
      if (!isNull(formData)) {
        this.form = { ...this.form, ...formData }
      }
    },
    displayWatch(prop, data) {
      const newDisplayMap = runWatchMethod(prop, data, 'display', this.watchDisplayMap, this.option.column, this.formItemOptions)
      this.displayMap = { ...this.displayMap, ...newDisplayMap }
    },
    disabledWatch(prop, data) {
      const newDisabledMap = runWatchMethod(prop, data, 'disabled', this.watchDisabledMap, this.option.column, this.formItemOptions)
      this.disabledMap = { ...this.disabledMap, ...newDisabledMap }
    },    
    packRemoteMethod(method, prop, formData) {
      const that = this
      return function(value) {
        that.$set(that.remoteLoadingMap, prop, true)
        const form = isNull(that.form) ? formData : that.form
        method(value, form).then(options => {
          that.$set(that.formItemOptions, prop, options)
          that.$set(that.remoteLoadingMap, prop, false)
        })
      }
    },
    // 自定义验证函数传入整个表单数据
    packRuleValidator(validator) {
      const that = this
      return function(rule, value, callback) {
        validator(rule, value, callback, that.form, that.data)
      }
    },
    packRules(rules) {
      if (rules) {
        rules = Array.isArray(rules) ? rules : [rules]
        return rules.map(item => {
          const newItem = { ...item }
          if (typeof newItem.validator === 'function') {
            newItem.validator = this.packRuleValidator(newItem.validator)
          }
          return newItem
        })
      }
      return null
    },
    // clear 清除对应的值
    toggleDisplay(display, props, ignore) {
      const newDisplayMap = {}
      if (Array.isArray(props)) {
        const ignoreForm = {}
        props.forEach(key => {
          newDisplayMap[key] = display === true
          ignoreForm[key] = ignore
        })
        this.ignoreForm = ignoreForm
      } else {
        for(const key in this.displayMap) {
          newDisplayMap[key] = typeof display === 'boolean' ? display : !this.displayMap[key]
        }
      }
      this.displayMap = { ...this.displayMap, ...newDisplayMap }
    }
  }
}