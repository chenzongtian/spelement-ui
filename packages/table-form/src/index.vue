<template>
<el-form class="sp-table-form" ref="elform" :model="formData" label-width="0px">
  <el-table
    v-if="isRender"
    ref="elTable"
    v-bind="elTableOption"
    border
    index
    :max-height="maxHeight"
    :data="tableData"
    @selection-change="onSelectionChange"
    @cell-click="onCellClick">
    <el-table-column
      v-if="initOption.selection"
      type="selection"
      fixed="left"
      align="center"
      width="40">
    </el-table-column>
    <el-table-column
      fixed="left"
      type="index"
      align="center"
      :index="indexMethod"
      show-overflow-tooltip
      label="序号">
    </el-table-column>
    <template v-for="(column, index) in columnList">
      <el-table-column
        v-if="column.children && column.children.length > 0"
        :key="index"
        v-bind="column.elTableColumProps"
        align="center">
        <template v-for="(childColumn, childIndex) in column.children">
          <el-table-column
            v-if="childColumn.tableEdit !== false"
            :key="childIndex"
            v-bind="childColumn.elTableColumProps"
            align="center">
            <template slot-scope="scope">
              <span class="space-span" v-if="disabledMap[column.prop] || disabledRowMap[column.prop + scope.row.id]">{{ scope.row[childColumn.prop] }}</span>
              <sp-form-item
                v-else-if="childColumn.type !== 'trigger'"
                v-model="scope.row[childColumn.prop]"
                :component="childColumn.component"
                :prop="'list.' + scope.$index + '.' + childColumn.prop"
                :row-index="scope.$index"
                :el-form-item="childColumn.elFormItemProps"
                :el-props="childColumn.elProps"
                :options="formItemOptions[childColumn.prop]"
                :loading="remoteLoadingMap[childColumn.prop]"
                :remote-method="packRemoteMethod(childColumn.elProps.remoteMethod, childColumn.prop, scope.$index)"
                @change="onChange($event, childColumn.component, childColumn.prop, scope.$index)">
              </sp-form-item>
              <div v-else class="sp-copy-el-input el-input--mini" @click="onTrigger(childColumn, scope.$index)">
                <p class="el-input__inner" v-if="scope.row[childColumn.prop]">{{ scope.row[childColumn.prop] }}</p>
                <p class="el-input__inner placeholder" v-else>{{ childColumn.elProps.placeholder }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            v-else
            :key="childIndex"
            v-bind="childColumn.elTableColumProps"
            align="center">
          </el-table-column>
        </template>
      </el-table-column>
      <el-table-column
        v-else-if="column.tableEdit !== false"
        :key="index"
        v-bind="column.elTableColumProps"
        align="center">
        <template slot-scope="scope">
          <span class="space-span" v-if="disabledMap[column.prop] || disabledRowMap[column.prop + scope.row.id]">{{ scope.row[column.prop] }}</span>
          <sp-form-item
            v-else-if="column.type !== 'trigger'"
            v-model="scope.row[column.prop]"
            :component="column.component"
            :prop="'list.' + scope.$index + '.' + column.prop"
            :row-index="scope.$index"
            :el-form-item="column.elFormItemProps"
            :el-props="column.elProps"
            :options="formItemOptions[column.prop]"
            :loading="remoteLoadingMap[column.prop]"
            :remote-method="packRemoteMethod(column.elProps.remoteMethod, column.prop, scope.$index)"
            @change="onChange($event, column.component, column.prop, scope.$index)">
          </sp-form-item>
          <div v-else class="sp-copy-el-input el-input--mini" @click="onTrigger(column, scope.$index)">
            <p class="el-input__inner" v-if="scope.row[column.prop]">{{ scope.row[column.prop] }}</p>
            <p class="el-input__inner placeholder" v-else>{{ column.elProps.placeholder }}</p>
          </div>                 
        </template>
      </el-table-column>
      <el-table-column
        v-else-if="column.type !== 'slot'"
        :key="index"
        v-bind="column.elTableColumProps"
        align="center">
      </el-table-column>
      <!-- 自定义列 -->
      <el-table-column
        v-else
        :key="column.prop"
        v-bind="column.elTableColumProps">
        <template slot-scope="scope">
          <slot :name="column.prop" v-bind="{ row: sourceData[scope.$index], $index: scope.$index }"></slot>
        </template>          
      </el-table-column> 
    </template>
    <el-table-column
      label="操作"
      fixed="right"
      align="center"
      width="140"
      v-if="showHandle">
      <template slot-scope="scope">
        <el-button v-if="initOption.cloneBtn && tableData.length - 1 > scope.$index" icon="el-icon-copy-document" type="text" @click="onClone(scope.row, scope.$index)">复制</el-button>
        <el-button v-if="(initOption.removeBtn && tableData.length - 1 > scope.$index) || !initOption.addBtn" icon="el-icon-minus" type="text" @click="onRemove(scope.row, scope.$index)">移除</el-button>
        <el-button v-if="initOption.addBtn && tableData.length - 1 === scope.$index" icon="el-icon-plus" type="text" @click="onAdd">添加</el-button>
        <el-button v-if="saveMethod !== null" icon="el-icon-check" type="text" :disabled="!changeRow[scope.$index]" @click="onSave(scope.row, scope.$index)">保存</el-button>
        <slot name="rowAction" v-bind="{ ...scope, tableData }"></slot>
      </template>
    </el-table-column>
    <template slot="append">
      <div v-if="loading || selfLoading" class="sp-load-wrap">
        <img class="circular" src="../../images/Loading-a.png" alt="加载中">
      </div>
    </template>
    <template slot="empty">
      <sp-empty v-if="!selfLoading" style="height: 100%; min-height: 160px;" :title="emptyTip"></sp-empty>
      <div v-else></div>
    </template>    
  </el-table>
</el-form> 
</template>

<script>
import Mformdynamic from '../../mixins/Mformdynamic'
import { getClientInfo } from '../../util/client.js'
import SpFormItem from '../../form-item'
import { deepClone, isNull } from '../../util/util.js'
import { enTableFormData } from '../../core/util'
export default {
  name: 'sp-table-form',
  components: {
    SpFormItem
  },
  mixins: [Mformdynamic],
  props: {
    dynamic: {
      type: Boolean,
      default: false
    },
    query: {
      type: Object,
      default: function() { return {} }
    },
    loading: {
      type: Boolean,
      default: false
    },
    indexMethod: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      sourceData: [],
      disabledRowMap: {},
      isRender: true,
      haveSetTbMaxHeight: false,
      maxHeight: 1000,
      selfLoading: true,
      emptyTip: '暂无数据'
    }
  },
  computed: {
    showHandle: function() {
      return this.initOption.cloneBtn || this.initOption.removeBtn || this.initOption.addBtn || this.saveMethod !== null
    },
    dataReady: function() {
      return !this.loading && !this.selfLoading
    }
  },
  mounted() {
    window.addEventListener('resize', this, false)
  },
  destroyed() {
    window.removeEventListener('resize', this, false)
  },
  activated() {
    this.setTableSize(true)
    window.addEventListener('resize', this)
  },
  deactivated() {
    window.removeEventListener('resize', this)
  },  
  methods: {
    handleEvent(event) {
      switch(event.type) {
        case 'resize':
          this.setTableSize(true)
          break
      }
    },     
    setData(data, option, loading = false) {
      this.isRender = true
      this.selfLoading = true
      this.tableData = []
      this.sourceData = data
      // 父级组件非加载中的状态
      if (!loading) {
        if (isNull(option)) {
          option = this.initOption
        }
        const spData = data.map((item, index) => {
          item.$idKey = index + this.indexMethod
          return item
        })
        enTableFormData(spData, option).then(params => {
          const { tableData, disabledMap, optionsMap } = params
          this.disabledRowMap = disabledMap
          this.sourceData = spData
          this.formItemOptions = { ...this.formItemOptions, ...optionsMap }
          if (option.addBtn) {
            this.defRowData = this.extDefRowData(option, data)
            tableData.push({ ...this.defRowData })
          }
          this.tableData = tableData 
          this.selfLoading = false
          this.$nextTick(() => {
            if (this.$refs.elform) {
              this.$refs.elform.clearValidate() 
            }
            this.setTableSize()
            if (this.$refs.elTable && (option.showSummary || option.summaryMethod)) {
              this.$refs.elTable.syncPostion()
              this.$refs.elTable.doLayout()
            }          
          })
        })
      }
    },
    getValitateData() {
      const list = []
      this.tableData.forEach(row => {
        if (this.valitateRowData(row)) {
          let data = row
          if (row.$idKey) {
            const sRow = this.sourceData.find(item => item.$idKey === row.$idKey) || {}
            const editData = this.getRowEditData(row)
            if (sRow) {
              data = deepClone(sRow)
              Object.assign(data, editData)
            }
          }
          list.push(data)
        }
      })
      return list
    }, 
    getRowEditData(rowData) {
      const rowEditData = {}
      for(const prop in this.editProps) {
        rowEditData[prop] = rowData[prop]
      }
      return rowEditData
    },      
    toggleEditColumn(columnProps, disabled) {
      const props = typeof columnProps === 'string' ? [columnProps] : Array.isArray(columnProps) ? columnProps : []
      if (props.length > 0) {
        const newDisabledMap = {}
        props.forEach(prop => {
          newDisabledMap[prop] = typeof disabled === 'boolean' ? disabled : !this.disabledMap[prop]
        })
        this.disabledMap = { ...this.disabledMap, ...newDisabledMap }
      }
    },
    resetTableColumn(column) {
      const option = {...this.initOption, column }
      this.isRender = false
      this.init(option, this.sourceData)
    },
    onSelectionChange(selection) {
      const srows = selection.map(row => {
        return this.sourceData.find(item => item.$idKey === row.$idKey)
      })
      this.$emit('selection-change', srows)
    },
    onCellClick(row, column) {
      const srow = this.sourceData.find(item => item.$idKey === row.$idKey)
      this.$emit('cell-click', srow, column)
    },
    validate(callback) {
      this.$refs.elform.validate(callback)
    },
    // 计算表格高度 isDoLayout为true,强制重新计算高度
    setTableSize(isDoLayout) {
      let maxHeight = this.initOption.maxHeight
      const targetDom = this.$el
      if (targetDom && !maxHeight && (isDoLayout || !this.haveSetTbMaxHeight)) {
        const minHeight = 300
        const { clientHeight } = getClientInfo()
        const { top } = targetDom.getBoundingClientRect()
        let bodyMaxHeight = clientHeight - top - 77 // 分页栏高度(52)
        bodyMaxHeight = bodyMaxHeight < minHeight ? minHeight : bodyMaxHeight
        if (this.maxHeight !== bodyMaxHeight) {
          this.maxHeight = bodyMaxHeight
          this.haveSetTbMaxHeight = true
          this.$refs.elTable.doLayout()       
        }
      } else if (maxHeight) {
        this.maxHeight = maxHeight
      }
    }    
  }
}
</script>

<style>

</style>
