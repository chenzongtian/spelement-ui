import { defSpCrudOption, filterFormOptionFormCrud } from '../core/const'
import { isNull } from '../util/util'
export default {
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
      initOption: {},
      spCrudOption: {},
      // 分页
      pageSizes,
      page: {
        current: 1,
        size: pageSizes[0],
        total: 0
      },
      indexMethod: 1,
      // 各类弹窗显隐
      addDialogVisible: false,
      editDialogVisible: false,
      viewDialogVisible: false,
      columnDialogVisible: false,
      // 各类表单配置项
      addFormOption: {},
      editFormOption: {},
      viewFormOption: {},
      searchFormOption: {},
      searchPropsInMore: [],
      searchSpread: false,
      columnBoardData: [], // 更改之前的
      boardColumData: null, // 更改之后的
      searchSlotList: [],
      tableSlotList: []
    }
  },
  methods: {
    initCrudOptions(spCrudOption) {
      if (spCrudOption.addBtn) {
        this.addFormOption = this.getAddFormOption(spCrudOption)
      }
      if (spCrudOption.editBtn) {
        this.editFormOption = this.getEditFormOption(spCrudOption)
      }
      if (spCrudOption.viewBtn) {
        this.viewFormOption = this.getViewFormOption(spCrudOption)
      }
      if (spCrudOption.showSearchForm) {
        this.searchFormOption = this.getSearchFormOption(spCrudOption)
        this.searchPropsInMore = this.searchFormOption.column.filter(item => item.search === 'more').map(item => item.prop)
      }
      this.spCrudOption = spCrudOption
      this.columnBoardData = spCrudOption.column.filter(item => item.custAble === true || item.hide !== true)
      this.searchSlotList = spCrudOption.column.filter(item => item.search && item.type === 'slot')
      this.tableSlotList = spCrudOption.column.filter(item => item.slot === true || item.type === 'slot')      
    },
    getSpCrudOption(option, permission = {}) {
      let showSearchForm = false
      if (option && Array.isArray(option.column)) {
        showSearchForm = option.column.some(item => item.search === true)
      }
      return { ...defSpCrudOption, ...option, showSearchForm, ...permission }
    },
    getSearchFormOption(option){
      let column = []
      if (Array.isArray(option.column)) {
        column = option.column.filter(item => item.search).map(item => {
          let labelWidth = item.searchLabelWidth || item.labelWidth || option.searchLabelWidth || option.labelWidth
          labelWidth = typeof labelWidth === 'number' ? labelWidth + 'px' : labelWidth
          const formItem = {
            type: item.searchType || item.type,
            labelWidth,
            span: item.searchSpan || 24,
            index: item.index || 999,
            rules: null,
            slot: null,
            display: item.search === true,
            disabled: false,
            editAble: null,
            addAble: null,
            canClear: item.canClear === false ? false : isNull(item.defaultValue),
            tip: null
          }
          if (formItem.type === 'select' && item.multiple) {
            formItem.collapseTags = true
          }
          return { ...item, ...formItem }
        }).sort((a, b) => {
          const aIndex = a.searchIndex || 999
          const bIndex = b.searchIndex || 999
          return aIndex - bIndex
        })
      }
      const formOption = filterFormOptionFormCrud(option)
      return {
        ...formOption,
        labelPosition: 'right',
        column
      }
    },
    getAddFormOption(option){
      let column = []
      if (Array.isArray(option.column)) {
        column = option.column.filter(item => item.addAble !== false).map(item => {
          const formItem = {
            span: item.addSpan || item.span || 24,
            display: !isNull(item.addDisplay) ? item.addDisplay : item.display,
            disabled: !isNull(item.addDisabled) ? item.addDisabled : item.disabled,
            type: item.addType || item.type,
            index: item.index || 999,
            editAble: null,
            slot: null
          }
          return { ...item, ...formItem }
        })
      }
      const formOption = filterFormOptionFormCrud(option)
      return {
        ...formOption,
        column
      }
    },
    getEditFormOption(option){
      let column = []
      if (Array.isArray(option.column)) {
        column = option.column.filter(item => item.editAble !== false).map(item => {
          const formItem = {
            span: item.editSpan || item.span || 24,
            display: !isNull(item.editDisplay) ? item.editDisplay : item.display,
            disabled: !isNull(item.editDisabled) ? item.editDisabled : item.disabled,            
            type: item.editType || item.type,
            index: item.index || 999,
            addAble: null,
            slot: null,
            rules: item.editRules ===  false ? null : item.rules
          }
          return { ...item, ...formItem }
        })
      }
      const formOption = filterFormOptionFormCrud(option)
      return {
        ...formOption,
        column
      }
    },
    getViewFormOption(option){
      let column = []
      if (Array.isArray(option.column)) {
        column = option.column.filter(item => item.editAble !== false).map(item => {
          const formItem = {
            span: item.span || 24,
            display: item.viewDisplay === false ? false : true,
            disabled: true,
            type: item.type,
            index: item.index || 999,
            slot: null,
            rules: null
          }
          return { ...item, ...formItem }
        })
      }
      const formOption = filterFormOptionFormCrud(option)
      return {
        ...formOption,
        column
      }
    },
    onShowMoreSearch() {
      if (this.$refs.spSearchForm) {
        this.$refs.spSearchForm.toggleDisplay(!this.searchSpread, this.searchPropsInMore, this.searchSpread)
        this.searchSpread = !this.searchSpread
        setTimeout(() => {
          this.setTableSize(true)
        }, 500)        
      }
    },
    setPage(data) {
      if (data.total !== this.page.total || data.current !== this.page.current) {
        this.page = { ...this.page, total: data.total, current: data.current }
      }
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
    onSearchSubmit(data = {}) {
      this.resetTableData({ ...this.params, ...data }, false, true)
    },
    onSearchInitSubmit(data = {}) {
      if (this.autoLoad) {
        this.resetTableData({ ...this.params, ...data }, false, true)
      }
    },
    onAddSubmit(data) {
      const that = this
      this.$emit('add-submit', data, function(isClose) {
        if (isClose) {
          that.addDialogVisible = false
          that.refreshTableData()
        }
      })
    },
    onEditSubmit(data) {
      const that = this
      this.$emit('edit-submit', data, function(isClose) {
        if (isClose) {
          that.editDialogVisible = false
          that.refreshTableData()
        }
      })
    },
    onFormCancel(name) {
      if (name === 'addForm') {
        this.addDialogVisible = false
      } else {
        this.editDialogVisible = false
      }
    },    
    onTaggleSearchForm() {
      this.$refs.collapseItem.handleHeaderClick()
      setTimeout(() => {
        this.setTableSize(true)
      }, 500)
    },
    resetColumnWithBoard(option, columnData) {
      const columnDict = {}
      columnData.forEach(col => {
        columnDict[col.prop] = col
      })
      let optionColumn = []
      if (Array.isArray(option.column) && option.column.length > 0) {
        optionColumn = option.column
      }
      const spColumn = optionColumn.filter(item => item.custAble || item.hide !== true).map(col => {
        const custColumn = columnDict[col.prop]
        if (custColumn) {
          if (Array.isArray(col.children) && col.children.length > 0) {
            let childrenWidth = null
            if (!isNull(custColumn.width) && !isNaN(custColumn.width)) {
              childrenWidth = Number(custColumn.width) / col.children.length
            }
            col.children = col.children.map(child => {
              const width = childrenWidth === 0 ? child.width : childrenWidth
              return { ...child, width }
            })
          }
          return { ...col, ...custColumn }
        } else {
          return col
        }
      }).sort((a, b) => {
        const aIdx = isNaN(a.sort) ? 99 : a.sort
        const bIdx = isNaN(b.sort) ? 99 : b.sort
        return aIdx - bIdx
      })
      return spColumn
    },
    onColumnBoardSubmit(columnData) {
      this.boardColumData = columnData
      const spColumn = this.resetColumnWithBoard(this.initOption, columnData)
      // this.$refs.elTable.resetSpColumn(spColumn)
      this.resetTableColumn(spColumn)
      this.columnDialogVisible = false

      if (this.useOptions && typeof this.useOptions.saveColumn === 'function') {
        let menuId = this.$route.meta.menuId
        if (this.option.custOptionId) {
          menuId = menuId.toString() + this.option.custOptionId
        }
        const column = columnData.map((item, index) => {
          return {
            menuId,
            prop: item.prop,
            show: item.hide ? '0' : '1',
            fixed: !item.fixed ? '0' : item.fixed,
            width: item.width,
            sort: index
          }
        })        
        this.useOptions.saveColumn(column)
      }
    }   
  }
}