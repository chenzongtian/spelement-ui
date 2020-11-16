<template>
  <div class="sp-crud">
    <!-- 搜索区 -->
    <el-collapse v-if="spCrudOption.showSearchForm" value="collapse-search" class="sp-el-collapse">
      <el-collapse-item class="sp-el-collapse-item" ref="collapseItem" name="collapse-search">    
        <sp-form 
          ref="spSearchForm"
          type="search"
          enter-submit
          :option="searchFormOption"
          @init-data="onSearchInitSubmit"
          @submit="onSearchSubmit">
          <!-- 自定义插槽 -->
          <template v-for="slotItem in searchSlotList" v-slot:[slotItem.prop]="scope">
            <div :key="slotItem.prop">
              <slot :name="slotItem.prop" v-bind="scope"></slot>
            </div>
          </template>
        </sp-form>
        <div v-if="searchPropsInMore.length > 0" class="search-more">
          <el-button type="text" icon="el-icon-s-unfold" v-if="searchSpread" @click="onShowMoreSearch">收起更多搜索</el-button>
          <el-button type="text" icon="el-icon-s-fold" v-else @click="onShowMoreSearch">展开更多搜索</el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- 按钮操作栏 -->
    <div class="sp-crud-handle">
      <div class="sp-crud-handle-left">
        <el-button v-if="spCrudOption.addBtn" @click="onAddRow" type="primary" icon="el-icon-plus">新增</el-button>
        <slot name="menuLeft"></slot>        
      </div>
      <div class="sp-crud-handle-right">
        <el-button v-if="spCrudOption.columnBtn" @click="columnDialogVisible = true" icon="el-icon-menu" circle></el-button>
        <el-button v-if="spCrudOption.refreshBtn" @click="refreshTableData" icon="el-icon-refresh" circle></el-button>
        <el-button v-if="spCrudOption.searchBtn && spCrudOption.showSearchForm" @click="onTaggleSearchForm()" icon="el-icon-search" circle></el-button>
        <slot name="menuRight"></slot>        
      </div>    
    </div>
    <!-- 主体表格 -->
    <sp-table 
      v-if="spTableOption.column && spTableOption.column.length > 0"
      class="sp-crud-table"
      ref="elTable"
      :dynamic="dynamic"
      :option="spTableOption"
      :data="data"
      :auto-load="autoLoad && !spCrudOption.showSearchForm"
      :lazy-load="autoLoad && spCrudOption.showSearchForm"
      @row-del="onRowDel"
      @row-edit="onRowEdit"
      @row-view="onRowView"
      @selection-change="onSelectionChange"
      @row-click="onRowClick"
      @row-dblclick="onRowDblclick">
      <template v-slot:expand="scope">
        <slot name="expand" v-bind="scope"></slot>
      </template>      
      <!-- 表格操作列插槽 -->
      <template slot="rowAction" slot-scope="scope">
        <slot name="rowAction" v-bind="scope"></slot>
      </template>
      <!-- 自定义列插槽 -->
      <template v-for="slotItem in tableSlotList" v-slot:[slotItem.prop]="scope">
        <div :key="slotItem.prop">
          <slot :name="slotItem.prop" v-bind="scope"></slot>
        </div>
      </template>
    </sp-table>

    <!-- 新增表单弹窗 -->
    <el-dialog
      v-if="spCrudOption.addBtn"
      title="新增"
      :visible.sync="addDialogVisible"
      width="80%"
      append-to-body>
      <sp-form
        ref="addForm"
        :visible="addDialogVisible"
        :option="addFormOption"
        :data="addFormData"
        @cancel="onFormCancel('addForm')"
        @submit="onAddSubmit"></sp-form>
    </el-dialog>

    <!-- 编辑表单弹窗 -->
    <el-dialog
      v-if="spCrudOption.editBtn"
      title="编辑"
      width="80%"
      :visible.sync="editDialogVisible"
      append-to-body>
      <sp-form 
        ref="editForm" 
        :option="editFormOption" 
        :data="editFormData" 
        @cancel="onFormCancel('editForm')"
        @submit="onEditSubmit"></sp-form>
    </el-dialog>

    <!-- 查看表单弹窗 -->
    <el-dialog
      v-if="spCrudOption.viewBtn"
      title="查看"
      width="80%"
      :visible.sync="viewDialogVisible"
      append-to-body>
      <sp-form
        ref="viewForm"
        type="view"
        :option="viewFormOption"
        :data="selectedRowData"></sp-form>
    </el-dialog>

    <!-- 列显隐弹窗 -->
    <el-dialog
      v-if="spCrudOption.columnBtn"
      title="自定义表格列"
      :visible.sync="columnDialogVisible"
      append-to-body>
      <sp-column-board :visible.sync="columnDialogVisible" :column-data="columnBoardData" @submit="onColumnBoardSubmit"></sp-column-board>
    </el-dialog>

  </div>
</template>

<script>
import Mcrud from '../../mixins/Mcrud'
import { defSpCrudOption, filterTableOptionFormCrud } from '../../core/const'
export default {
  name: 'sp-crud',
  mixins: [Mcrud],
  data() {
    return {
      // spCrudOption: {},
      spTableOption: {},
      defSearchParams: {}, // 搜索表单值
      selectedRowData: {}, // 选择表格中的行
      addFormData: {},
      editFormData: {}
    }
  },  
  mounted() {
    this.init(this.option)
  },
  methods: {
    init(option = {}) {
      // const showSearchForm = option.column.some(item => item.search)
      this.initOption = option
      const spCrudOption = this.getSpCrudOption(option)
      this.initCrudOptions(spCrudOption)
      this.spTableOption = this.getTableOption(spCrudOption)
    },
    getSpCrudOption(option) {
      let showSearchForm = false
      if (option && Array.isArray(option.column)) {
        showSearchForm = option.column.some(item => item.search === true)
      }
      return { ...defSpCrudOption, ...option, showSearchForm, ...this.permission }
    },
    getTableOption(option) {
      const tableOption = filterTableOptionFormCrud(option)
      return {
        ...tableOption,
        column: option.column
      }      
    },
    // onkeyUpEvent() {
    //   if (this.$refs.spSearchForm) {
    //     this.$refs.spSearchForm.onSubmit()
    //   }
    // },
    setTableSize(isDoLayout) {
      this.$refs.elTable.setTableSize(isDoLayout)
    },
    loadTableData(params) {
      this.$refs.elTable.loadTableData(params)
    },
    // isAssign 合并原来的值还是没传入的字段置为空，默认是合并
    resetTableData(params = {}, isAssign = false, isFromSearch) {
      if (this.$refs.spSearchForm && !isFromSearch) {
        this.$refs.spSearchForm.setFormData(params, isAssign)
        if (isAssign) {
          params = this.$refs.spSearchForm.getFormData(true)
        }
      }
      this.$refs.elTable.resetTableData(params)
    },
    
    refreshTableData(isDelRow) {
      this.$refs.elTable.refreshTableData(isDelRow)
    },
    onAddRow() {
      this.addFormData = {}
      this.addDialogVisible = true
    },    
    onRowView(row) {
      this.selectedRowData = row
      this.viewDialogVisible = true
    },    
    onRowEdit(row) {
      this.editFormData = row
      this.editDialogVisible = true
    },
    onRowDel(row) {
      const that = this
      this.$emit('row-del', row, (success) => {
        if(success) {
          that.$refs.elTable.refreshTableData(true)
        }
      })
    },
    resetTableColumn(column) {
      if (this.$refs.elTable) {
        this.$refs.elTable.resetSpColumn(column)
      }
    },
    getTableData(source) {
      return this.$refs.elTable.getTableData(source)
    },
    onSelectionChange(selection) {
      this.$emit('selection-change', selection)
    },
    onRowClick(row, index) {
      this.$emit('row-click', row, index)
    },
    onRowDblclick(row, index) {
      this.$emit('row-dblclick', row, index)
    },
    toggleRowSelection(row) {
      this.$refs.elTable.toggleRowSelection(row)
    },
    clearSelection() {
      this.$refs.elTable.clearSelection()
    }    
  }
}
</script>
