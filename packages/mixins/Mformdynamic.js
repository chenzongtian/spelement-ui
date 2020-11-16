import {
  extElTableColumnProps,
  getWatchPropValue,
  isWatchObj,
  assignWatchObj,
  getDefDataWithColumn,
  assignDictOptions,
  loadLazyFormItemOptions,
  extElFormCompProps,
  extElFormItemProps,
  enFormData,
  type2Component,
  resetColumnStyle,
  structuredWatchData
} from '../core/util'
import { filterElTableOption } from '../core/const'
import { isEqual, deepClone, isNull } from '../util/util.js'
import { debounce } from '../util/decorator'
export default {
  props: {
    removeMethod: {
      type: Function,
      default: null
    },
    saveMethod: {
      type: Function,
      default: null
    },
    // 每条数据的唯一标示字段，通常用来判断数据的修改是新增还是更新，新增的数据该字段为空
    rowKey: {
      type: String,
      default: 'id'
    },
    option: {
      type: Object,
      default: function() { return { column: [] } }
    },
    //源数据
    data: {
      type: [Array, Function],
      default: function() { return [] }
    }
  },
  data() {
    const defOption = {
      addBtn: true,
      cloneBtn: false,
      removeBtn: true,
      labelPosition: 'right',
      labelWidth: '80px',
      selection: true,
      column: []
    }
    return {
      initOption: {},
      defOption: defOption,
      elTableOption: {},
      columnList: [],
      sourceData: [],
      tableData: [],
      formItemOptions: {},
      changeRow: [],
      removeRowsWithKey: [], //移除的源数据
      editProps: {},
      requiredProps: {},
      remoteLoadingMap: {},
      asyncValueMap: {},
      defRowData: {},
      disabledMap: {},
      ruleLock: [],
      lockValueWatch: {} // 锁定值变化触发监听事件，避免循环监听
    }
  },
  computed: {
    formData: function() {
      return {
        list: this.tableData
      }
    }
  },
  watch: {
    data(newData) {
      this.setData(newData, this.initOption)
    },
    option(newOption) {
      this.init(newOption, this.data)
    }  
  },
  created() {
    if (!isNull(this.option)) {
      this.init(this.option, this.data)
    }
  },  
  methods: {
    init(option, data) {
      option = resetColumnStyle(option)
      option = {...this.defOption, ...option }
      const column = []
      const requiredProps = {}
      const editProps = {}
      const asyncValueMap = {}
      const remoteLoadingMap = {}
      const formItemOptions = {}
      const watchFormItemOptions = {}
      const disabledMap = {}
      if (option && Array.isArray(option.column)) {
        option.column.filter(item => item.hide != true && item.display !== false).forEach(item => {
          const spColumnItem = this.extColumn(option, item, requiredProps, editProps)
          column.push(spColumnItem)
          disabledMap[item.prop] = item.disabled === true
          if (typeof item.remoteMethod === 'function') {
            remoteLoadingMap[item.prop] = false
          }
          requiredProps[item.prop] = item.required === true ? true : false
          if (item.tableEdit !== false) {
            editProps[item.prop] = true
          }
          assignDictOptions(item, formItemOptions, {}, watchFormItemOptions)
          if (isWatchObj(item.asyncValue)) {
            assignWatchObj(item.prop, item.asyncValue, asyncValueMap)
          }   
        })
      }
      this.initOption = option
      this.elTableOption = this.getElTableOption(option)
      this.requiredProps = requiredProps
      this.editProps = editProps
      this.asyncValueMap = asyncValueMap
      this.remoteLoadingMap = remoteLoadingMap
      this.formItemOptions = formItemOptions
      this.watchFormItemOptions = watchFormItemOptions
      this.disabledMap = disabledMap
      this.columnList = column
      
      loadLazyFormItemOptions(data, option.column).then(optionsMap => {
        this.formItemOptions = { ...this.formItemOptions, ...optionsMap }
        this.setData(data, option)
      })
    },
    extColumn(option, item, requiredProps, editProps) {
      const component = type2Component(item.type)
      const elProps = extElFormCompProps(option, item)
      const placeholder = item.type === 'trigger' ? '点击选择': elProps.placeholder
      elProps.placeholder = placeholder
      if (typeof item.remoteMethod === 'function') {
        elProps.filterable = true
        elProps.remote = true
        elProps.defaultFirstOption = item.defaultFirstOption !== false
      }
      const elFormItemProps = extElFormItemProps(option, item)
      if (item.rules) {
        elFormItemProps.rules = this.packRules(item.rules, item.prop)
      }
      const elTableColumProps = extElTableColumnProps(option, item)
      // elTableColumProps.showOverflowTooltip = false
      let children
      if (Array.isArray(item.children)) {
        children = item.children.map(childItem => this.extColumn(option, childItem, requiredProps, editProps))
      }

      requiredProps[item.prop] = item.required === true ? true : false
      if (item.tableEdit !== false) {
        editProps[item.prop] = true
      }

      return {
        prop: item.prop,
        label: item.label,
        tableEdit: item.tableEdit,
        type: item.type,
        component,
        span: item.span || 12,
        elProps,
        elFormItemProps,
        elTableColumProps,
        children
      }
    },
    extDefRowData(option = {}, data = []) {
      const column = Array.isArray(option.column) ? option.column : []
      const defData = getDefDataWithColumn({}, column, this.formItemOptions)
      const valueCloneColumn = column.filter(item => item.valueClone)
      if (valueCloneColumn.length > 0 && data.length > 0) {
        valueCloneColumn.forEach(item => {
          defData[item.prop] = data[0][item.prop]
        })
      }
      return defData   
    },
    getElTableOption(option) {
      const newOption = filterElTableOption(option)
      const that = this
      if (typeof option.cellStyle === 'function') {
        newOption.cellStyle = function({ row, column, rowIndex, columnIndex }) {
          const sourceRow = that.sourceData.find(item => item.$idKey === row.$idKey)
          return option.cellStyle({ row: sourceRow || row, column, rowIndex, columnIndex })
        }
      }
      return newOption
    },    
    // 外部可用方法
    getData(isValidate) {
      if (isValidate) {
        return new Promise((resolve, reject) => {
          this.$refs.elform.validate((valid) => {
            if (valid) {
              const data = this.getValitateData()
              resolve(data)
            } else if (reject) {
              reject()
            }
          })
        })
      } else {
        return this.getValitateData()
      }
    },
    // 外部可用方法
    addData(data) {
      if (Array.isArray(data) && data.length > 0) {
        const column = this.initOption.column.filter(item => item.hide != true)
        const tableData = data.map(rowData => {
          return enFormData(rowData, column, this.formItemOptions)
        })
        this.tableData = this.tableData.concat(tableData)
      }
    },
    // 外部可用方法
    getRemoveRows() {
      return this.removeRowsWithKey
    },
    // 外部可用方法
    resetRowData(data, index) {
      this.tableData.splice(index, 1, data)
    },
    resetTableData(done) {
      if (typeof done === 'function') {
        const newTableData = done(this.tableData)
        if (!Array.isArray(newTableData) && newTableData.length === 0) {
          this.tableData = [{...this.defRowData}]
        } else {
          this.tableData = newTableData
        }
      }
    },
    valitateRowData(data) {
      if (isNull(data)) { return false }
      for (const prop in this.requiredProps) {
        if (this.requiredProps[prop] && isNull(data[prop])) {
          return false
        }
      }
      return true
    },
    onRemove(row, index) {
      if (this.removeMethod && row[this.rowKey]) {
        this.removeMethod(row, (deleteAble) => {
          if (deleteAble) {
            this.removeRow(row, index)
          }
        })
      } else {
        this.removeRow(row, index)
      }
    },
    removeRow(row, index) {
      if (row[this.rowKey]) {
        this.removeRowsWithKey.push(row)
      }
      this.tableData.splice(index, 1)
      this.$nextTick(() => {
        this.$refs.elform.clearValidate()        
      })
    },
    onAdd() {
      const cloneData = { ...this.defRowData }
      this.tableData.push(cloneData)
    },
    onClone(row, index) {
      const cloneData = deepClone(row)
      if (cloneData[this.rowKey]) {
        cloneData[this.rowKey] = null
      }
      this.tableData.splice(index + 1, 0, cloneData)
    },
    onSave(row, index) {
      if (this.saveMethod) {
        this.$set(this.changeRow, index, false)
        this.saveMethod(row)
      }
    },
    onChange(value, component, prop, index) {
      
      if (this.saveMethod) {
        let isChange = this.tableData[index][this.rowKey]
        if (!isChange) {
          isChange = !isEqual(this.data[index], this.tableData[index])
        }
        this.$set(this.changeRow, index, isChange)
      }
      const tableData = this.getValitateData()
      // const rProp = prop + index
      // if (this.lockValueWatch[rProp]) {
      //   console.warn(`${rProp}已锁定监听变化`)
      //   this.lockValueWatch[rProp] = false
      // } else {
      // }
      this.valueWatch(prop, index, tableData)
    },
    onTrigger(column, index) {
      const row = deepClone(this.tableData[index])
      this.$emit('on-trigger', row, column, index)
    },    
    // 是否保存修改 false-未保存修改，true-已保存修改或没有修改
    haveSaveChange() {
      return !this.changeRow.some(need => need === true)
    },
    packRemoteMethod(method, prop, index) {
      const that = this
      const propIdx = prop // + index
      if (typeof method !== 'function') {
        return function() {}
      }
      return debounce(function(value) {
        that.$set(that.remoteLoadingMap, propIdx, true)
        
        method(value, that.tableData[index]).then(options => {
          that.$set(that.formItemOptions, prop, options)
          that.$set(that.remoteLoadingMap, propIdx, false)
        })
      })
    },   
    valueWatch(prop, rindex, tableData) {
      let tprops = null
      if (typeof prop === 'string') {
        tprops = this.asyncValueMap[prop]
      } else {
        tprops = structuredWatchData(this.asyncValueMap)
      }
      if (!isNull(tprops)) {
        const rowData = tableData[rindex]
        const newData = deepClone(rowData)
        for(const tprop in tprops) {
          const item = this.initOption.column.find(citem => citem.prop === tprop)
          
          const asyncValue = !item ? {} : item.asyncValue
          const watchValue = getWatchPropValue(asyncValue, newData, this.formItemOptions)
          // this.lockValueWatch[tprop + rindex] = true
          newData[tprop] = tprops[tprop](rowData, prop, watchValue, tableData)
        }
        this.tableData.splice(rindex, 1, newData)
      }
    },    
    packRuleValidator(validator) {
      const that = this
      return function(rule, value, callback) {
        // 解决重复验证多次的问题，权宜之计，待优化
        const lock = that.ruleLock.find(item => item.field === rule.field && item.value === value)
        if (lock) {
          const ltime = lock.time
          lock.time = Date.now()
          if (Date.now() - ltime < 1000) {
            callback()
            return
          }
        } else {
          that.ruleLock.push({
            field: rule.field,
            value,
            time: Date.now()
          })
        }
        const data = deepClone(that.tableData)
        const sourceData = deepClone(that.data)
        validator(rule, value, callback, data, sourceData)
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
    }
  }
}