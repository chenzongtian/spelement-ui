<template>
  <div class="sp-form sp-form-dynamic">
    <el-form ref="elform" :model="formData" :label-position="initOption.labelPosition" :label-width="initOption.labelWidth">
      <el-row v-for="(data, dIndex) in tableData" :key="dIndex">
        <el-col v-for="(formItem, index) in columnList" :key="index" :span="formItem.span">
          <sp-form-item
            v-model="data[formItem.prop]"
            :component="formItem.component"
            :label="index === 0 && dIndex !== 0 ? '' : formItem.label"
            :prop="'list.' + dIndex + '.' + formItem.prop"
            :el-form-item="formItem.elFormItemProps"
            :el-props="formItem.elProps"
            :options="formItemOptions[formItem.prop]"
            :loading="remoteLoadingMap[formItem.prop]"
            @change="onChange($event, formItem.prop, dIndex)">
          </sp-form-item>         
        </el-col>
        <el-col :span="2">
          <div style="padding-left: 20px;">
            <el-button v-if="initOption.cloneBtn && tableData.length - 1 > dIndex" icon="el-icon-copy-document" type="text" @click="onClone(data, dIndex)">复制</el-button>
            <el-button v-if="(initOption.removeBtn && tableData.length - 1 > dIndex) || !initOption.addBtn" icon="el-icon-minus" type="text" @click="onRemove(data, dIndex)">移除</el-button>
            <el-button v-if="initOption.addBtn && tableData.length - 1 === dIndex" icon="el-icon-plus" type="text" @click="onAdd">添加</el-button>
            <el-button v-if="saveMethod !== null" icon="el-icon-check" type="text" :disabled="!changeRow[dIndex]" @click="onSave(data, dIndex)">保存</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { isNull } from '../../util/util'
// 涉及下拉框、复选框、单选框的选项功能
import Mformdynamic from '../../mixins/Mformdynamic'
import SpFormItem from '../../form-item'
import { enFormData } from '../../core/util'
export default {
  name: 'sp-form-dynamic',
  components: {
    SpFormItem
  },
  mixins: [Mformdynamic],
  data() {
    return {}
  },
  methods: {
    // 外部可用方法
    setData(data, option) {
      this.removeLock = {}
      if (isNull(option)) {
        option = this.option
      }
      let tableData = []
      if (Array.isArray(data) && data.length > 0) {
        const column = option.column.filter(item => item.hide != true)
        tableData = data.map(rowData => {
          return enFormData(rowData, column, this.formItemOptions)
        })
      }
      if (this.initOption.addBtn) {
        this.defRowData = this.extDefRowData(this.option, data)
        tableData.push({ ...this.defRowData })
      }
      this.tableData = tableData
      this.removeRowsWithKey = []
      if (this.$refs.elform) {
        this.$nextTick(() => {
          this.$refs.elform.clearValidate()        
        })
      }
    },
    getValitateData() {
      const list = []
      this.tableData.forEach(row => {
        if (this.valitateRowData(row)) {
          list.push(row)
        }
      })
      return list
    },    
  }
}
</script>

<style>

</style>