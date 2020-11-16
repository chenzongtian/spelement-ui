<template>
  <div class="sp-form" :class="{'sp-form-search': type === 'search'}">
    <el-form @keyup.enter.native.stop="onSubmit(true)" ref="form" :model="form" :label-position="spOption.labelPosition" :label-suffix="spOption.labelSuffix" :label-width="spOption.labelWidth">
      <el-row>
        <template v-for="(formItem, index) in spFormList">
          <el-col v-if="displayMap[formItem.prop]" :span="formItem.span" :key="index">
            <!-- 自定义 -->
            <el-form-item
              v-if="formItem.component === 'slot'"
              :class="{'el-viewform-item': type === 'view'}"
              v-bind="formItem.elFormItem">
              <template>
                <slot :name="formItem.prop" v-bind="form"></slot>
              </template>
            </el-form-item>    
            <sp-form-item
              v-else
              v-model="form[formItem.prop]"
              :component="formItem.component"
              :type="type"
              :prop="formItem.prop"
              :el-form-item="formItem.elFormItem"
              :el-props="formItem.elProps"
              :disabled="disabledMap[formItem.prop]"
              :options="formItemOptions[formItem.prop]"
              :loading="remoteLoadingMap[formItem.prop]"
              @change="onChange($event, formItem.component, formItem.prop)">
            </sp-form-item>
          </el-col>
        </template>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="sp-handler-bar" v-if="type === 'form'" :style="{textAlign: 'right'}">
            <el-button v-if="spOption.submitBtn" type="primary" icon="el-icon-check" @click="onSubmit">{{spOption.submitBtnTxt}}</el-button>
            <el-button v-if="spOption.clearBtn" icon="el-icon-delete" @click="onClear">{{spOption.clearBtnTxt}}</el-button>
            <el-button v-if="spOption.cancelBtn" icon="el-icon-close" @click="onCancel">{{spOption.cancelBtnTxt}}</el-button>
            <slot name="formHandle"></slot>
          </div>
          <div class="sp-handler-bar" v-else-if="type === 'search'" :style="{textAlign: 'right'}">
            <el-button v-if="spOption.submitBtn" type="primary" icon="el-icon-search" @click="onSubmit">{{spOption.searchBtnTxt}}</el-button>
            <el-button v-if="spOption.resetBtn" icon="el-icon-refresh-left" @click="onReset">{{spOption.resetBtnTxt}}</el-button>
            <el-button v-if="spOption.cancelBtn" icon="el-icon-close" @click="onCancel">{{spOption.cancelBtnText}}</el-button>
            <slot name="formHandle"></slot>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import MForm from '../../mixins/Mform'
import SpFormItem from '../../form-item'
import { enFormData, deFormData, isWatchObj, loadLazyFormItemOptions } from '../../core/util'
import { isNull, deepClone } from '../../util/util'
import { throttle } from '../../util/decorator'
export default {
  name: 'sp-form',
  mixins: [MForm],
  components: {
    SpFormItem
  },
  props: {
    option: {
      type: Object,
      default: function() { return {} }
    },
    data: {
      type: [Object, Array],
      default: function() { return {} }
    },
    type: {
      type: String,
      default: 'form' // view，form, search
    },
    visible: {
      type: Boolean,
      default: true
    },
    enterSubmit: {
      type: Boolean,
      defualt: false,
    }
  },  
  data() {
    return {
      spOption: {}
      // uploadHeaders: {}
    }
  },
  watch: {
    visible: function(newV, oldV) {
      if (!newV && newV !== oldV) {
        this.changeFormData({ ...this.allForm })
      }
    },
    // 表单值变化
    data: function(newData) {
      this.setFormData(newData, false)
    }
  },
  created() {
    this.init(this.option, this.type)
  },
  methods: {
    setFormData(data = {}, isAssign = true) {
      let form = {}
      if (!isNull(data)) {
        const newFormData = enFormData(data, this.option.column, this.formItemOptions, true)
        form = {}
        const unClearFormData = {}
        for(const prop in this.allForm) {
          if (!isAssign) {
            // 没有传人的字段置为空
            form[prop] = newFormData[prop]
          } else {
            // 合并原来的值
            form[prop] = Object.hasOwnProperty.call(newFormData, prop) ? newFormData[prop] : this.form[prop] 
          }
          if (Object.hasOwnProperty.call(this.unClearForm, prop)) {
            unClearFormData[prop] = form[prop]
          }
        }
        loadLazyFormItemOptions(data, this.option.column).then(optionsMap => {
          this.formItemOptions = { ...this.formItemOptions, ...optionsMap }
          this.changeFormData(form)
        })
        this.unClearForm = { ...this.unClearForm, ...unClearFormData }
      } else {
        this.changeFormData(form)
      }
    },
    changeFormData(form = {}) {
      this.form = form
      // this.allForm = { ...this.allForm, ...form }
      // console.log({ allForm: this.allForm, form })
      this.clearWatchOptions()
      this.watchDataChange(null, { ...form })
      this.$nextTick(() => {
        if (this.$refs.form) {
          this.$refs.form.clearValidate()
        }
      })
    },
    getFormData(isSubmit) {
      if (isSubmit) {
        return this.getSubmitData(this.form)
      }
      return { ...this.form }
    },
    validateField(prop, callback) {
      this.$refs.form.validateField(prop, callback)
    },
    validate(callback) {
      this.$refs.form.validate(callback)
    },
    onChange(value, componentType, prop) {
      if (componentType === 'treeselect' && !isNull(value)) {
        this.$refs.form.clearValidate(prop)
      }
      this.watchDataChange(prop, this.form)
      let option = {}
      if (Array.isArray(this.formItemOptions[prop])) {
        if (Array.isArray(value)) {
          option = this.formItemOptions[prop].filter(item => item && value.includes(item.value))
        } else {
          option = this.formItemOptions[prop].find(item => item && item.value.toString() === value)
        }
      }
      this.$emit('change', prop, value, option)
    },
    onSubmit: throttle(function(isEnter) {
      // enter健触发，但是又没有配置enter健提交，则不处理
      if (isEnter === true && !this.enterSubmit) { return }
      this.$refs.form.validate((valid)=> {
        if (valid) {
          this.doSubmit(this.form)
        }
      })
    }, 3000),
    doSubmit(formModel = {}, isReset) {
      const form = this.getSubmitData(formModel)
      this.$emit('submit', form, isReset)
    },
    getSubmitData(formData) {
      for(const prop in this.ignoreForm) {
        if (this.ignoreForm[prop]) {
          formData[prop] = null
        }
      }
      return deFormData(formData, this.option.column, this.formItemOptions)
    },
    onClear() {
      const form = { ...this.unClearForm }
      this.changeFormData(form)
    },
    clearWatchOptions() {
      for(const prop in this.formItemOptions) {
        const item = this.option.column.find(item => item.prop === prop)
        if (item && isWatchObj(item.options) && isNull(this.form[prop])) {
          this.$set(this.formItemOptions, prop, [])
        }
      }
    },
    onReset () {
      const form = { ...this.allForm }
      this.changeFormData(form)
      this.doSubmit(form, true)
    },
    onCancel() {
      const data = deepClone(this.form)
      this.$emit('cancel', data)
    }    
  }
}
</script>

<style lang="scss" scoped>
  .sp-form-tip {
    font-size: 12px;
    line-height: 12px;
    color: #999;
    margin: 5px 0;  
  }
</style>