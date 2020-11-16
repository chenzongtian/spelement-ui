<template>
  <div class="sp-form-group">
    <div class="sp-form-group-item" v-for="(option, index) in formOptionList" :key="index">
      <div class="sp-form-group-title" v-if="option.title">{{ option.title }}</div>
      <sp-form-dynamic
        :ref="'formDynamic' + index"
        v-if="option.dynamic"
        type="group"
        :data="data"
        :option="option">
        <!-- 自定义插槽 -->
        <template v-for="slotItem in slotList" v-slot:[slotItem.prop]="scope">
          <div :key="slotItem.prop">
            <slot :name="slotItem.prop" v-bind="scope"></slot>
          </div>
        </template>        
      </sp-form-dynamic>
      <sp-form
        :ref="'form' + index"
        v-else
        :option="option"
        :data="data"
        type="group">
        <!-- 自定义插槽 -->
        <template v-for="slotItem in slotList" v-slot:[slotItem.prop]="scope">
          <div :key="slotItem.prop">
            <slot :name="slotItem.prop" v-bind="scope"></slot>
          </div>
        </template>
      </sp-form>
    </div>
    <div v-if="type === 'form'" :style="{textAlign: 'right'}">
      <el-button v-if="spOption.submitBtn" type="primary" icon="el-icon-check" @click="onSubmit">{{spOption.submitBtnTxt}}</el-button>
      <el-button v-if="spOption.clearBtn" icon="el-icon-delete" @click="onClear">{{spOption.clearBtnTxt}}</el-button>
      <el-button v-if="spOption.cancelBtn" icon="el-icon-close" @click="onCancel">{{spOption.cancelBtnTxt}}</el-button>
      <slot name="formHandle"></slot>
    </div>
    <div v-else-if="type === 'search'" :style="{textAlign: 'right'}">
      <el-button v-if="spOption.submitBtn" type="primary" icon="el-icon-search" @click="onSubmit">{{spOption.searchBtnTxt}}</el-button>
      <el-button v-if="spOption.resetBtn" icon="el-icon-refresh-left" @click="onReset">{{spOption.resetBtnTxt}}</el-button>
      <el-button v-if="spOption.cancelBtn" icon="el-icon-close" @click="onCancel">{{spOption.cancelBtnText}}</el-button>
      <slot name="formHandle"></slot>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'sp-form-group',
  props: {
    option: {
      type: Object,
      default: function() { return {} }
    },
    data: {
      type: Object,
      default: function() { return {} }
    },
    type: {
      type: String,
      default: 'form'
    }
  },
  data() {
    const defSpFormOption = {
      cancelBtn: false,
      clearBtn: false,
      submitBtn: true,
      resetBtn: true,
      resetBtnTxt: '重置',
      submitBtnTxt: '提交',
      searchBtnTxt: '搜索',
      cancelBtnTxt: '取消',
      clearBtnTxt: '清空'
    }    
    return {
      defSpFormOption,
      spOption: {},
      formOptionList: [],
      slotList: [],
      refs: []
    }
  },
  created() {
    this.spOption = { ...this.defSpFormOption, ...this.option }
    this.formOptionList = this.initConfig(this.spOption)
    this.refs = this.formOptionList.reduce((refs, item, index) => {
      if (item.dynamic) {
        refs.push('formDynamic' + index)
      } else {
        refs.push('form' + index)
      }
      return refs
    }, [])
    let slotList = []
    this.formOptionList.forEach(option => {
      if (Array.isArray(option.column)) {
        const slots = option.column.filter(item => item.slot === true || item.type === 'slot')
        slotList = slotList.concat(slots)
      }
    })
    this.slotList = slotList
  },
  methods: {
    initConfig(option) {
      const mergeOption = { ...option, group: null }
      let formOptionList = []
      if(Array.isArray(option.group)) {
        formOptionList = option.group.map(item => {
          return { ...mergeOption, ...item, }
        })
      }
      return formOptionList
    },
    onSubmit() {
      let data = {}
      const validaters = this.refs.filter(name => this.$refs[name] && this.$refs[name][0]).map(name => {
        return this.$refs[name][0].$refs.form.validate()
      })
      Promise.all(validaters).then(() => {
        this.refs.forEach(name => {
          if (this.$refs[name] && this.$refs[name][0]) {
            const sigleData = this.$refs[name][0].getFormData()
            data = { ...data, ...sigleData }
          }
        })
        this.$emit('submit', data)
      }, () => {
        
      })
    },
    onClear() {
      this.refs.forEach(name => {
        if (this.$refs[name] && this.$refs[name][0]) {
          this.$refs[name][0].onClear()
        }
      })
    },
    onCancel() {
      this.refs.forEach(name => {
        if (this.$refs[name] && this.$refs[name][0]) {
          this.$refs[name][0].onCancel()
        }
      })
    },
    onReset () {
      this.onClear()
      this.onSubmit()
    }
  }
}
</script>

<style lang="scss" scoped>
.sp-form-group-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 32px;
  border-bottom: 1px solid #eee;
}
</style>
