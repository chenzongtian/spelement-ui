<template>
  <div class="sp-table">
    <el-table
      v-if="showElTable"
      ref="elTable"
      :class="{ 'highlight-current-row': spTableOption.highlightCurrentRow }"
      :data="tableData"
      border
      v-bind="elTableOption"
      @header-dragend="onHeaderDragend"
      @selection-change="onSelectionChange"
      @row-click="onRowClick"
      @sort-change="sortChange"
      @row-dblclick="onRowDblclick">
      <el-table-column
        v-if="spTableOption.selection"
        type="selection"
        fixed="left"
        align="center"
        width="40">
      </el-table-column>
      <el-table-column fixed="left" v-if="spTableOption.expand" type="expand">
        <template slot-scope="scope">
          <slot name="expand" v-bind="scope"></slot>
        </template>
      </el-table-column>
      <el-table-column
        fixed="left"
        type="index"
        :index="indexMethod"
        align="center"
        show-overflow-tooltip
        label="序号">
      </el-table-column>  
      <template v-for="column in spColumn">
        <el-table-column
          v-if="column.children && column.children.length > 0"
          :key="column.prop"
          align="center"
          :fixed="column.fixed"
          :label="column.label">
          <template v-for="childColumn in column.children">
            <el-table-column
              v-if="childColumn.children && childColumn.children.length > 0"
              :key="childColumn.label"
              align="center"
              :fixed="childColumn.fixed"
              :label="childColumn.label">
              <el-table-column
                v-for="childWColumn in childColumn.children"
                :key="childWColumn.prop"
                v-bind="childWColumn.elProps">
              </el-table-column>               
            </el-table-column>
            <el-table-column
              v-else
              :key="childColumn.prop"
              v-bind="childColumn.elProps">
            </el-table-column>                     
          </template>         
        </el-table-column>
        <el-table-column
          v-else-if="column.type !== 'slot'"
          :key="column.prop"
          v-bind="column.elProps">
        </el-table-column>
        <!-- 自定义列 -->
        <el-table-column
          v-else
          :key="column.prop"
          v-bind="column.elProps">
          <template slot-scope="scope">
            <slot :name="column.prop" v-bind="{ row: sourceData[scope.$index], $index: scope.$index }"></slot>
          </template>          
        </el-table-column>       
      </template>     
      <template slot="append">
        <div v-if="loading" class="sp-load-wrap">
          <img class="circular" src="../../images/Loading-a.png" alt="加载中">
        </div>
      </template>
      <template slot="empty">
        <sp-empty v-if="!loading" style="height: 100%; min-height: 300px;" :title="emptyTip"></sp-empty>
        <div v-else></div>
      </template>
      <el-table-column
        v-if="spTableOption.showRowAction"
        fixed="right"
        align="center"
        :width="spTableOption.rowActionWidth"
        label="操作">
        <template slot-scope="scope">
          <el-button v-if="spTableOption.viewBtn && scope.row.viewBtn !== false" :disabled="scope.row.viewDisabled" @click="onRowView(sourceData[scope.$index], scope.$index)" type="text" icon="el-icon-view">查看</el-button>
          <el-button v-if="spTableOption.editBtn && scope.row.editBtn !== false" :disabled="scope.row.editDisabled"  @click="onRowEdit(sourceData[scope.$index], scope.$index)" type="text" icon="el-icon-edit">编辑</el-button>
          <el-button v-if="spTableOption.delBtn && scope.row.delBtn !== false" :disabled="scope.row.delDisabled"  @click="onRowDel(sourceData[scope.$index], scope.$index)" type="text" icon="el-icon-delete">删除</el-button>
          <slot name="rowAction" v-bind="{ row: sourceData[scope.$index], $index: scope.$index }"></slot>
        </template>          
      </el-table-column>      
    </el-table>
    <div v-if="dynamic && loading" class="sp-load-wrap">
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
  </div>
</template>

<script>
import { isNull, deepClone } from '../../util/util.js'
import { debounce } from '../../util/decorator.js'
import { getClientInfo } from '../../util/client.js'
import {
  extSpTableColumn,
  enTableData,
  resetColumnStyle
} from '../../core/util'
import { defSpTbOption, filterElTableOption } from '../../core/const'
export default {
  name: 'sp-table',
  props: {
    permission: {
      type: Object,
      default: function () { return {} }
    },
    option: {
      type: Object,
      default: function () { return {} }
    },
    data: {
      type: [Array, Function],
      default: function() { return [] }
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    // 动态配置表头
    dynamic: {
      type: Boolean,
      default: false
    },
    query: {
      type: Object,
      default: function() { return {} }
    }
  },
  data() {
    const pageSizes = [10, 20, 50, 100, 500]
    return {
      updateSpColumn: false,
      deactivated: false,
      tableData: [],
      sourceData: [],
      spTableOption: {},
      elTableOption: {},
      spColumn: [],
      // spColumnMap: {},
      loading: false,
      emptyTip: '暂无数据',
      pageSizes,
      page: {
        current: 1,
        size: pageSizes[0],
        total: 0
      },
      indexMethod: 1,
      params: {},
      sortConfig: {},
      bodyMaxHeight: -1 // 用于鉴别已经计算过一次表格高度了
    }
  },
  computed: {
    showElTable: function() {
      return ((this.dynamic && !this.loading) || !this.dynamic) && !this.updateSpColumn && !this.deactivated
    }
  },
  watch: {
    option: function(newOption) {
      this.init(newOption)
    },
    data: function(newData) {
      if (Array.isArray(newData)) {
        this.loadTableData(newData)
      }
    },
    query: function(newData) {
      this.resetTableData(newData)
    }
  },
  created() {
    this.params = { ...this.query }
    if (!this.dynamic) {
      this.init(this.option)
    }
    this.loading = this.lazyLoad
  },
  mounted() {
    if (this.autoLoad) {
      this.loadTableData(this.params)
    } else {
      this.emptyTip = '请手动搜索'
    }
    window.addEventListener('resize', this, false)
  },
  destroyed() {
    window.removeEventListener('resize', this, false)
  },
  activated() {
    this.deactivated = false
    this.setTableSize(true)
    window.addEventListener('resize', this)
  },
  deactivated() {
    this.deactivated = true
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
    init(option) {
      option = resetColumnStyle(option)
      this.elTableOption = this.getElTableOption(option)
      this.spColumn = this.getSpColumn(option)
      this.spTableOption = this.getSpOption(option)
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
    getSpColumn(option) {
      return extSpTableColumn(option)
    },
    getSpOption(option) {
      const newOption = {
        showRowAction: option.showRowAction || option.editBtn || option.delBtn,
      }
      const spOption = { ...defSpTbOption, ...option, ...newOption, ...this.permission }
      const rowActionWidth = this.calRowActionWidth(spOption)
      spOption.rowActionWidth = rowActionWidth
      return spOption
    },
    setTableData(data) {
      const spData = data.map((item, index) => {
        item.$idKey = index + this.indexMethod
        return item
      })
      const column = this.option.column.filter(item => item.hide !== true)
      enTableData(spData, { ...this.option, column }).then(tableData => {
        this.sourceData = spData
        this.tableData = tableData
        this.emptyTip = '暂无数据'
        this.loading = false
        this.$nextTick(() => {
          this.setTableSize()
          if (this.elTableOption.summaryMethod) {
            this.$refs.elTable.syncPostion()
          }
        })        
      })
    },
    getTableData(source) {
      if (source) {
        return deepClone(this.sourceData)
      } else {
        return deepClone(this.tableData)
      }
    },
    setPage(data) {
      if (data.total !== this.page.total || data.current !== this.page.current) {
        this.page = { ...this.page, total: data.total, current: data.current }
      }
    },
    loadTableData(params) {
      this.params = isNull(params) ? {} : params
      if (typeof this.data === 'function') {
        const reqParams = { ...this.page, ...params, ...this.sortConfig, total: null }
        this.loading = true
        this.tableData = []
        this.data(reqParams, (config) => {
          if(isNull(config)) {
            this.loading = false
            return
          }
          let { option, data, total } = config || {}
          data = Array.isArray(data) ? data : []
          total = total || data.length || 0
          if (!isNull(option)) {
            this.init(option, data)
          }
          this.setTableData(data)
          this.setPage({
            total,
            current: reqParams.current
          })
        })
      } else if (Array.isArray(this.data)) {
        this.setTableData(this.data)
      }
    },
    resetTableData(params = {}) {
      this.setPage({
        current: 1
      })
      this.indexMethod = 1
      const defaultSort = this.spTableOption.defaultSort
      if(!isNull(defaultSort)) {
        this.sortConfig = null
        // // 会触发sort-change事件
        this.$refs.elTable.sort(defaultSort.prop, defaultSort.order)
      }
      this.loadTableData(params)
    },
    refreshTableData(delCount) {
      delCount = delCount === true ? 1 : typeof delCount === 'number' ? delCount : 0
      if (delCount > 0 && this.page.current > 1) {
        const total = this.page.total - delCount
        const maxCurrent = Math.ceil(total / this.page.size)
        if (maxCurrent < this.page.current) {
          this.setPage({
            current: maxCurrent
          })
        }
      }
      this.loadTableData(this.params)
    },
    handleSizeChange(size) {
      this.page = { ...this.page, size, current: 1 }
      this.indexMethod = (this.page.current - 1) * this.page.size + 1
      this.loadTableData(this.params)
    },
    handleCurrentChange(page) {
      this.page.current = page
      this.indexMethod = (this.page.current - 1) * this.page.size + 1
      this.loadTableData(this.params)
    },
    onHeaderDragend() {
      this.$refs.elTable.doLayout()
    },
    sortChange(column) {
      const { order, prop } = column
        // 避免重置之后又触发sort-change导致两次请求接口的问题
      if (!this.sortConfig) {
        this.sortConfig = { order, prop }
      } else {
        // this.$emit('sort-change', column, row, record)
        if (order !== this.sortConfig.order || prop !== this.sortConfig.prop) {
          this.sortConfig = { order, prop }
          this.refreshTableData()
        }
      }
    },
    calRowActionWidth(options = {}) {
      if (options.rowActionWidth) {
        return options.rowActionWidth
      }
      let width = ['editBtn', 'delBtn', 'viewBtn'].reduce((w, item) => {
        return w + (options[item] ? 65 : 0)
      }, 0)
      if (this.$scopedSlots && this.$scopedSlots.rowAction) {
        const rowActionSlot = this.$scopedSlots.rowAction()
        if (rowActionSlot) {
          width += rowActionSlot.length * 65
        }     
      }
      return width < 80 ? 80 : width
    },   
    // 计算表格高度
    setTableSize: debounce(function (isDoLayout) {
      if (this.option.maxHeight) { return }
      const targetDom = this.$el
      if (targetDom && (this.bodyMaxHeight < 0 || isDoLayout)) {
        const minHeight = 300
        const { clientHeight } = getClientInfo()
        const { top } = targetDom.getBoundingClientRect()
        let bodyMaxHeight = clientHeight - top - 77 // 52 + 15 + 10
        bodyMaxHeight = bodyMaxHeight < minHeight ? minHeight : bodyMaxHeight
        if (this.bodyMaxHeight !== bodyMaxHeight) {
          this.bodyMaxHeight = bodyMaxHeight
          this.$set(this.elTableOption, 'maxHeight', this.bodyMaxHeight)
          if (isDoLayout) {
            this.$refs.elTable.doLayout()
          }
        }
      }
    }, 480),
    resetSpColumn(column) {
      const option = {...this.option, column }
      this.updateSpColumn = true
      this.spColumn = extSpTableColumn(option)
      this.$nextTick(() => {
        this.updateSpColumn = false
      })
    },
    onRowView(row, index) {
      this.$emit('row-view', row, index)
    },
    onRowEdit(row, index) {
      this.$emit('row-edit', row, index)
    },
    onRowDel(row, index) {
      this.$emit('row-del', row, index)
    },
    onSelectionChange(selection) {
      const srows = selection.map(row => {
        return this.sourceData.find(item => item.$idKey === row.$idKey)
      })
      this.$emit('selection-change', srows)
    },
    clearSelection() {
      this.$refs.elTable.clearSelection()
    },    
    onRowClick(row, index) {
      const srow = this.sourceData.find(item => item.$idKey === row.$idKey)
      this.$emit('row-click', srow, index)
    },
    onRowDblclick(row, index) {
      const srow = this.sourceData.find(item => item.$idKey === row.$idKey)
      this.$emit('row-dblclick', srow, index)
    },
    toggleRowSelection(row) {
      const trow = this.tableData.find(item => item.$idKey === row.$idKey)
      this.$refs.elTable.toggleRowSelection(trow)
    }    
  }
}
</script>
