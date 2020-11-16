<template>
<div class="sp-crud sp-crud-form">
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
  <sp-table-form
    ref="spTableForm"
    v-if="(dynamic && tableFormInit) || !dynamic"
    :option="spTbformOption"
    :data="sourceData"
    :loading="loading"
    @selection-change="onSelectionChange"
    @cell-click="onCellClick">
    <!-- 自定义列插槽 -->
    <template v-for="slotItem in tableSlotList" v-slot:[slotItem.prop]="scope">
      <div :key="slotItem.prop">
        <slot :name="slotItem.prop" v-bind="scope"></slot>
      </div>
    </template>
  </sp-table-form>
  <div v-if="dynamic && !tableFormInit" class="sp-load-wrap">
    <img class="circular" src="../../images/Loading-a.png" alt="加载中">
  </div>  
  <div v-if="page.total > 0" class="sp-pagination-wrap">
    <el-pagination
      @keyup.enter.native.stop
      background
      layout="total, sizes, prev, pager, next, jumper"
      :current-page.sync="page.current"
      :page-sizes="pageSizes"
      :page-size="page.size"      
      :total="page.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination>    
  </div>

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
        :data="selectedRowData" 
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
import { isNull } from '../../util/util.js'
import { filterTableFormOptionFormCrud } from '../../core/const'
export default {
  name: 'sp-crud-form',
  mixins: [Mcrud],
  props: {
    removeMethod: Function,
    saveMethod: Function,
    // 每条数据的唯一标示字段，通常用来判断数据的修改是新增还是更新，新增的数据该字段为空
    rowKey: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      sourceData: [],
      tableFormInit: false,
      spTbformOption: {},
      loading: true,
      boardColumn: null, // 自定义更改之后重组的表格列
      params: {}
    }
  },
  created() {
    this.params = this.query
    this.init(this.option)
  },  
  methods: {
    init(option) {
      this.initOption = option
      const spCrudOption = this.getSpCrudOption(option, this.permission)
      this.initCrudOptions(spCrudOption)
      if (!this.dynamic) {
        this.initTableForm(spCrudOption, [])
      }
      // 如果没有搜索，则初始化之后加载数据
      if (!spCrudOption.showSearchForm) {
        this.loadTableData(this.params, true)
      }
    },
    initTableForm(spCrudOption, data) {
      if (this.boardColumData) {
        const spColumn = this.resetColumnWithBoard(spCrudOption, this.boardColumData)
        spCrudOption.column = spColumn
      }
      this.spTbformOption = this.getTableFormOption(spCrudOption)
      this.sourceData = data
      this.tableFormInit = true
    },
    getTableFormOption(option) {
      const tableOption = filterTableFormOptionFormCrud(option)
      let column = Array.isArray(option.column) ? option.column : []
      column = column.filter(item => item.hide !== true)
      return {
        ...tableOption,
        column
      }      
    },
    /**
     * @param {Object} params 来自搜索或传入的固定参数 
     * @param {Boolean} isInit 是否初始化表格组件之后的第一次请求
     */
    loadTableData(params = {}, isInit) {
      // 保存参数，用于刷新、翻页等
      this.tableFormInit = this.dynamic && isInit ? false : true
      if (this.loading && this.tableFormInit) { return }
      if (typeof this.data === 'function') {
        this.loading = true
        const reqParams = { ...this.page, ...params, total: null }
        // 这里不直接设置sourceData, 是因为要让子组件table-form有个加载中的过渡状态
        if (this.tableFormInit && this.$refs.spTableForm) {
          this.$refs.spTableForm.setData([], null, true)
        }
        this.data(reqParams, (config) => {
          this.loading = false
          let { option, data, total } = config || {}
          data = Array.isArray(data) ? data : []
          total = total || data.length || 0
          if (!this.tableFormInit) {
            if (isNull(option)) {
              option = this.spCrudOption
            } else {
              this.initOption = option
              option = this.getSpCrudOption(option, this.permission)            
            }            
            this.initTableForm(option, data)
          } else {
            this.setTableFormData(data)
          }
          this.setPage({
            total,
            current: reqParams.current
          })
        })
      }
    },
    resetTableData(params = {}, isAssign, isFormSearch) {
      this.setPage({
        current: 1
      })
      this.indexMethod = 1
      if (this.$refs.spSearchForm && !isFormSearch) {
        this.$refs.spSearchForm.setFormData(params, false)
      }
      this.params = params
      this.loadTableData(this.params, true)
    },
    refreshTableData(isDelRow) {
      if (isDelRow && this.page.current > 1) {
        const total = this.page.total - 1
        const maxCurrent = Math.ceil(total / this.page.size)
        if (maxCurrent < this.page.current) {
          this.setPage({
            current: maxCurrent
          })
        }
      }
      this.loadTableData(this.params)
    },       
    toggleEditColumn(columnProps, disabled) {
      this.$refs.spTableForm.toggleEditColumn(columnProps, disabled)
    },
    resetTableColumn(column) {
      if (this.$refs.spTableForm) {
        this.$refs.spTableForm.resetTableColumn(column)
      }
    },
    setTableFormData(data, option) {
      if (isNull(option)) {
        option = this.spTbformOption
      }
      if (this.$refs.spTableForm) {
        this.$refs.spTableForm.setData(data, option)
      }
    },
    getData(isValidate) {
      return this.$refs.spTableForm.getData(isValidate)
    },
    resetRowData(data, index) {
      this.$refs.spTableForm.resetRowData(data, index)
    },
    setTableSize(isDoLayout) {
      this.$refs.spTableForm.setTableSize(isDoLayout)
    },
    handleSizeChange(size) {
      this.page = { ...this.page, size, current: 1 }
      this.indexMethod = (this.page.current - 1) * this.page.size + 1
      this.loadTableData(this.params)
    },
    onSelectionChange(selection) {
      this.$emit('selection-change', selection)
    },
    onCellClick(row, column) {
      this.$emit('cell-click', row, column)
    }
  }
}
</script>

<style>

</style>
