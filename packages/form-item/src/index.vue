<template>
  <el-form-item
    :class="{'el-viewform-item': type === 'view'}"
    v-bind="elFormItem"
    :label="label || elFormItem.label"
    :prop="prop || elFormItem.prop"
    >
    <!-- 文本框 -->
    <el-input
      v-if="component === 'input'"
      v-model="curValue"
      v-bind="elProps"
      :disabled="disabled"
      @change="onChange">
    </el-input>
    <sp-textarea
      v-else-if="component === 'sptextarea'"
      v-model="curValue"
      v-bind="elProps"
      :disabled="disabled"
      @keyup.enter.native.stop
      @change="onChange">
    </sp-textarea>
    <!-- 开关 -->
    <el-switch
      v-if="component === 'switch'"
      v-model="curValue"
      v-bind="elProps"
      :disabled="disabled"
      @change="onChange">
    </el-switch>
    <!-- 选择框 -->
    <el-select
      v-else-if="component === 'select'"
      v-model="curValue" 
      v-bind="elProps"
      :disabled="disabled"
      :loading="loading"
      :remote-method="remoteMethod || elProps.remoteMethod"
      @change="onChange">
      <el-option 
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        :disabled="option.disabled">
      </el-option>
    </el-select>            
    <!-- 复选框 -->
    <el-checkbox-group
      v-else-if="component === 'checkbox'"
      v-model="curValue" 
      v-bind="elProps"
      :disabled="disabled"
      @change="onChange">
      <el-checkbox 
        v-for="option in options"
        :key="option.value"
        :disabled="option.disabled"
        :label="option.value">
        {{option.label}}
      </el-checkbox>
    </el-checkbox-group>
    <!-- 单选框 -->
    <el-radio-group
      v-else-if="component === 'radio'"
      v-model="curValue" 
      v-bind="elProps"
      :disabled="disabled"
      @change="onChange">
      <el-radio 
        v-for="option in options"
        :key="option.value"
        :label="option.value"
        :disabled="option.disabled">
        {{option.label}}
      </el-radio>
    </el-radio-group>
    <!-- 日期框 -->
    <el-date-picker
      v-else-if="component === 'datepicker'"
      v-model="curValue"
      v-bind="elProps"
      :disabled="disabled"
      @change="onChange">
    </el-date-picker>
    <!-- 时间选择器 -->
    <el-time-select
      v-else-if="component === 'time'"
      v-model="curValue"
      v-bind="elProps"
      :disabled="disabled"
      @change="onChange">
    </el-time-select>
    <!-- 计数器 -->
    <el-input-number
      v-else-if="component === 'inputNumber'"
      v-model="curValue"
      v-bind="elProps"
      :disabled="disabled"
      @change="onChange">
    </el-input-number>
    <el-cascader
      v-else-if="component === 'cascader'"
      v-model="curValue"
      v-bind="elProps"
      :disabled="disabled"
      :options="options"
      @change="onChange"></el-cascader>                
    <!-- 上传图片 -->
    <sp-upload
      v-else-if="component === 'upload'" 
      :action="uploadAction"
      :limit="2"
      v-model="curValue">
    </sp-upload>
    <template v-else-if="component === 'uploadimg'">
      <sp-upload-img
        v-if="type !== 'view'"
        v-model="curValue"
        :el-props="elProps"
        @change="onChange">
      </sp-upload-img>
      <ul v-else class="el-upload-list el-upload-list--picture-card">
        <li v-for="imgUrl in curValue" :key="imgUrl" class="el-upload-list__item is-success">
          <el-image
            style="width: 100%; height: 100%;"
            :src="imgUrl"
            :preview-src-list="curValue">
          </el-image>
        </li>
      </ul>
    </template>
    <sp-tree-select
      v-else-if="component === 'treeselect'"
      v-model="curValue"
      v-bind="elProps"
      :options="options"
      :disabled="disabled"
      @change="onChange">
    </sp-tree-select>    
    <p class="sp-form-tip" v-if="tip">{{tip}}</p>
  </el-form-item>
</template>

<script>
import SpUpload from '../../upload'
import SpTreeSelect from '../../tree-select'
import SpTextarea from '../../textarea'
import SpUploadImg from '../../upload-img'
export default {
  name: 'sp-form-item',
  components: {
    SpUpload,
    SpUploadImg,
    SpTreeSelect,
    SpTextarea
  },  
  props: {
    value: [Number, String, Array, Object],
    prop: {
      type: String,
      default: 'input'
    },
    label: String,
    type: {
      type: String,
      default: 'form'
    },
    tip: String,
    component: {
      type: String,
      default: 'input'
    },
    action: String,
    elFormItem: {
      type: Object,
      default: function(){ return {}}
    },
    elProps: {
      type: Object,
      default: function(){ return {}}      
    },
    options: {
      type: Array,
      default: function(){ return []}
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rowIndex: {
      type: Number,
      default: 0
    },
    rules: [Array, Object],
    remoteMethod: Function
  },
  data() {
    return {
      curValue: ''
    }
  },
  watch: {
    value(newValue) {
      if (newValue !== this.curValue) {
        this.curValue = this.defValue(newValue)
      }
    }
  },
  created() {
    this.curValue = this.defValue(this.value)
  },
  methods: {
    defValue(value) {
      return this.isArrayValue() && !Array.isArray(value) ? [] : value
    },
    isArrayValue() {
      return this.component === 'checkbox' || (this.component === 'select' && this.elProps.multiple)
    },
    onChange(value) {
      this.$emit('input', value)
      this.$emit('change', value)
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
