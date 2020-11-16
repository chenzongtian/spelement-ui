import { isNull } from '../util/util'
// spForm组件option特有的属性
const spFormOptions = {
  submitBtn: 'boolean',
  submitBtnTxt: 'string',
  clearBtn: 'boolean',
  clearBtnTxt: 'string',
  cancelBtn: 'boolean',
  cancelBtnTxt: 'string',
  searchBtn: 'boolean',
  searchBtnTxt: 'string',
  resetBtn: 'boolean',
  resetBtnTxt: 'string',
  uploadAction: 'string',
  uploadHeaders: 'object',
  column: 'array',
  annotate: 'string',
  custAble: 'boolean'
}
// spTable组件option特有的属性
const spTableOptions = {
  editBtn: 'boolean',
  viewBtn: 'boolean',
  delBtn: 'boolean',
  showRowAction: 'boolean',
  rowActionWidth: 'number', 
  expand: 'boolean',
  column: 'array',
  annotate: 'string',
  custAble: 'boolean'  
}
// spCrud组件option特有的属性
const spCrudOptions = {
  addBtn: 'boolean',
  searchBtn: 'boolean',
  columnBtn: 'boolean',
  refreshBtn: 'boolean',
  showSearchForm: 'boolean',
  showTbMenu: 'boolean',
  showSptable: 'boolean',   
  editDialogWidth: 'number',
  addDialogWidth: 'number',
  annotate: 'string',
  custAble: 'boolean'  
}
const spCrudFormOptions = {
  searchBtn: 'boolean',
  columnBtn: 'boolean',
  refreshBtn: 'boolean',
  showSearchForm: 'boolean',
  showTbMenu: 'boolean',
  showSptable: 'boolean',   
  editDialogWidth: 'number',
  addDialogWidth: 'number',
  annotate: 'string',
  custAble: 'boolean'  
}
const spFormColumnProps = {
  options: ['array', 'function', 'object'],
  slot: 'boolean',
  defaultValue: ['string', 'number'],
  defaultSelectIndex: 'number',
  startValueProp: 'string',
  endValueProp: 'string',
  display: ['boolean', 'function'],
  disabled: ['boolean', 'function'],
  asyncValue: 'object'
}
const spTableColumnProps = {
  options: ['array', 'function', 'object'],
  slot: 'boolean',
  format: 'function',
  hide: 'boolean'
}
const spCrudColumnProps = {
  ...spFormColumnProps,
  ...spTableColumnProps,
  cellLabel: 'string',
  search: 'boolean',
  searchIndex: 'number',
  searchSpan: 'number',
  searchLabelWidth: 'number',
  addAble: 'boolean',
  addType: 'string',
  addRules: ['object', 'array'],
  editAble: 'boolean',
  editType: 'string',
  editRules: ['object', 'array']
}
const spFormdynamicColumnProps = {
  ...spFormColumnProps,
  ...spTableColumnProps,
  required: 'boolean',
  tableEdit: 'boolean'
}
export const defSpCrudOption = {
  annotate: null,
  addBtn: false,
  searchBtn: true,
  columnBtn: true,
  refreshBtn: true,
  showSearchForm: false,
  showTbMenu: true,
  editDialogWidth: '80%',
  addDialogWidth: '80%',
  column: []
}
export const defSpTbOption = {
  editBtn: false,
  viewBtn: false,
  delBtn: false,
  selection: true,
  expand: false,
  showRowAction: false,
  rowActionWidth: null,
  column: []
}
export const defSpCrudFormOption = {
  cloneBtn: false,
  addBtn: false,
  removeBnt: false,
  column: []
}
export const filterProps = (sourceOption, filterOption) => {
  if (isNull(filterOption) || isNull(sourceOption)) { return sourceOption }
  const newOption = {}
  for(const prop in sourceOption) {
    if (!filterOption[prop]) {
      newOption[prop] = sourceOption[prop]
    }
  }
  return newOption
}
export const filterFormOptionFormCrud = (crudOption) => {
  return filterProps(crudOption, { ...spCrudOptions, ...spTableOptions })
}
export const filterTableOptionFormCrud = (crudOption) => {
  return filterProps(crudOption, { ...spCrudOptions, ...spFormOptions })
}
export const filterTableFormOptionFormCrud = (crudOption) => {
  return filterProps(crudOption, { ...spCrudFormOptions, ...spFormOptions })
}
const clearColumnPorps = {
  ...spCrudColumnProps,
  ...spFormColumnProps,
  ...spTableColumnProps,
  ...spFormdynamicColumnProps,
  custAble: 'boolean',
  custOptionId: 'string',
  children: 'array',
  sort: 'number'
}
export const filterElFormComponentProps = (props = {}) => {
  return filterProps(props, { ...clearColumnPorps, labelWidth: 'string', rules: 'any' })
}
export const filterElFormItemProps = (props = {}) => {
  return filterProps(props, { ...clearColumnPorps, type: 'string', remoteMethod: 'function' })
}
export const filterElFormOption = (option = {}) => {
  return filterProps(option, { ...spFormOptions, column: 'array' })
}
export const filterElTableOption = (option = {}) => { 
  return filterProps(option, { ...spTableOptions, column: 'array' })
}
export const filterElTableColumnProps = (props = {}) => {
  return filterProps(props, { ...clearColumnPorps, rules: 'array', remoteMethod: 'function' })
}