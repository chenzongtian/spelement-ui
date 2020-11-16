import { isNull, deepClone, getLabelWithOptions } from "../util/util"
import { filterElFormComponentProps, filterElFormItemProps, filterElTableColumnProps } from './const.js'
const spreadColumn = (option) => {
  let column = []
  if (Array.isArray(option.column) && option.column.length > 0) {
    option.column.forEach(item => {
      if (Array.isArray(item.children) && item.children.length > 0) {
        const childColumn = spreadColumn({ column: item.children })
        column = column.concat(childColumn)
      } else {
        column.push(item)
      }
    })
    return column
  }
  return []
}
export const isArrayValueByItem = (item) => {
  const type = item.type || 'input'
  return type.search('range') !== -1 || (type === 'select' && item.multiple) || type === 'checkbox'
}
export const isWatchObj = (options) => {
  return options && options.watch && typeof options.method === 'function'
}
export const hasOptionsByType = (type) => {
  return ['select', 'radio', 'checkbox'].includes(type)
}
// 根据type匹配它们应用的elemenUI组件
export const type2Component = (type = 'input') => {
  const components = {
    uploadimg: ['elupload', 'uploadimg'],
    input: ['input', 'textarea', 'password', 'tel', 'number'],
    datepicker: ['year','month','date','dates', 'week','datetime','datetimerange', 'daterange','monthrange']
  }
  for(const c in components) {
    if (components[c].includes(type)) {
      return c
    }
  }
  return type
}
// 结合表单数据，表单元素的类型计算表单值
export const getDefValue = (item, itemOptions) => {
  let defValue = item.defaultValue
  if(typeof item.defaultSelectIndex === 'number') {
    const options = Array.isArray(itemOptions) ? itemOptions : Array.isArray(item.options) ? item.options : []
    const option = options[item.defaultSelectIndex]
    defValue = !option ? defValue : option.value
  }
  return defValue
}
export const getValueWithData = (item, data = {}, isDef = true, options) => {
  const defValue = isDef ? getDefValue(item, options) : ''
  let value =  data[item.prop]
  if (item.startValueProp && item.endValueProp && !isNull(data[item.startValueProp]) && !isNull(data[item.endValueProp])) {
    value = [data[item.startValueProp], data[item.endValueProp]]
  } 
  value = isNull(value) ? defValue : value
  const isArrayValue = isArrayValueByItem(item)
  if (isArrayValue && !Array.isArray(value)) {
    if (typeof value === 'number') {
      value = value.toString()
    }
    if (typeof value === 'string' && value.trim().length > 0) {
      value = value.split(',')
    } else {
      value = null
    }
  }
  return value
}
export const getDefDataWithColumn = (data = {}, column = [], formItemOptions = {}) => {
  const formData = {}
  column.forEach(item => {
    formData[item.prop] = getValueWithData(item, data, true, formItemOptions[item.prop])
  })
  return formData
}
// 转成表单组件合法值
export const enFormData = (data, column, formItemOptions = {}, defAble = false) => {
  const formData = {}
  const rangColumn = column.filter(item => item.endValueProp && item.startValueProp)
  const rangData = {}
  rangColumn.forEach(item => {
    if (data[item.startValueProp] || data[item.endValueProp]) {
      rangData[item.prop] = [data[item.startValueProp], data[item.endValueProp]]
    } else {
      rangData[item.prop] = ''
    }
  })
  const fullData = { ...data, ...rangData }
  for(const prop in fullData) {
    const item = column.find(col => col.prop === prop)
    if (item) {
      if (Array.isArray(item.children)) {
        const childData = enFormData(fullData, item.children, formItemOptions, defAble)
        Object.assign(formData, childData)
      } else {
        const isDef = item.clearable === false && defAble
        formData[prop] = getValueWithData(item, fullData, isDef, formItemOptions[prop])
      }
    }    
  }
  return formData
}
// 转成表单值
export const deFormData = (formData, column, formItemOptions) => {
  const data = {}
  for(const prop in formData) {
    const item = column.find(item => item.prop === prop)
    if (item) {
      let value = formData[prop]
      if (typeof value === 'object') {
        value = deepClone(value)
      }
      // 日期范围开始和结束分两个字段保存
      if (Array.isArray(value) && item && item.startValueProp && item.endValueProp) {
        data[item.startValueProp] = value[0]
        data[item.endValueProp] = value[1]
      } else if(item.multiple && typeof item.valueFormat === 'function') {
        data[prop] = item.valueFormat(value)
      } else {
        data[prop] = value
      }
      // 保存那些下拉框、复选框、单选框的选中项的label
      if (hasOptionsByType(item.type)) {
        let label = ''
        if (Array.isArray(value)) {
          label = value.map(v => {
            return getLabelWithOptions(formItemOptions[prop], v)
          })
        } else {
          label = getLabelWithOptions(formItemOptions[prop], value)
        }
        data['$' + prop] = label
      }
    }
  }
  return data
}
// 转换表格行的数据
export const enTableRowData = (data, column, optionsMap) => {
  const tableRowData = {}
  for(const prop in data) {
    if (Array.isArray(optionsMap[prop])) {
      tableRowData[prop] = getLabelWithOptions(optionsMap[prop], data[prop])
    } else {
      const columItem = column.find(item => item.prop === prop)
      if(columItem) {
        let propkey = null
        if (isWatchObj(columItem.options)) {
          propkey = propKeyWithWatchData(columItem, data)        
        } else if (typeof columItem.remoteMethod === 'function') {
          propkey = columItem.prop + '_' + data[prop]
        }
        if (propkey && Array.isArray(optionsMap[propkey])) {
          tableRowData[prop] = getLabelWithOptions(optionsMap[propkey], data[prop])
        } else if (typeof columItem.format === 'function') {
          tableRowData[prop] = columItem.format(data[prop])
        } else {
          tableRowData[prop] = data[prop]
        }
      } else {
        tableRowData[prop] = data[prop]
      }
    }
  }
  return tableRowData
}
export const enTableData = (sourceData, option = {}) => {
  // const column = Array.isArray(option.column) ? option.column : []
  const column = spreadColumn(option)
  if(Array.isArray(sourceData) && sourceData.length > 0 && column.length > 0) {
    return new Promise(resolve => {
      loadLazyFormItemOptions(sourceData, column).then(optionsMap => {
        const tableData = sourceData.map(data => {
          const rowData = enTableRowData(data, column, optionsMap)
          if (typeof option.rowEditDisabled === 'function') {
            rowData.editDisabled = option.rowEditDisabled(data)
          }
          if (typeof option.rowDelDisabled === 'function') {
            rowData.delDisabled = option.rowDelDisabled(data)
          }
          if (typeof option.rowViewDisabled === 'function') {
            rowData.viewDisabled = option.rowViewDisabled(data)
          }
          return rowData
        })
        resolve(tableData)
      })
    })
  } else {
    return Promise.resolve([])
  }
}
//
export const enTableFormData = (sourceData, option = {}) => {
  const column = Array.isArray(option.column) ? option.column : []
  if(Array.isArray(sourceData) && sourceData.length > 0 && column.length > 0) {
    const unEditColumn = column.filter(item => item.tableEdit === false)
    const editColumn = column.filter(item => item.tableEdit !== false)
    const columnMap = column.reduce((map, item) => {
      map[item.prop] = item
      return map
    }, {})
    return new Promise(resolve => {
      loadLazyFormItemOptions(sourceData, column).then(optionsMap => {
        const disabledMap = {}
        const cloneData = deepClone(sourceData)
        const tableData = sourceData.map((data) => {
          if(data.id) {
            for(const prop in data) {
              if (columnMap[prop] && typeof columnMap[prop].disabled === 'function') {
                disabledMap[prop + data.id] = columnMap[prop].disabled(data, cloneData)
              }
            }
          }
          const rowData = enTableRowData(data, unEditColumn, optionsMap)
          const rowFormData = enFormData(data, editColumn, optionsMap)
          return { ...rowData, ...rowFormData }
        })
        resolve({ tableData, disabledMap, optionsMap })
      })
    })
  } else {
    return new Promise(resolve => {
      loadLazyFormItemOptions(sourceData, column).then(optionsMap => {
        resolve({ tableData: [], disabledMap: {}, optionsMap })
      })
    })
  }
}
export const enCrudFormData = (sourceData, option = {}) => {
  let column = Array.isArray(option.column) ? option.column : []
  if(Array.isArray(sourceData) && sourceData.length > 0 && column.length > 0) {
    column = column.filter(item => item.hide !== true && item.tableEdit === false)
    return new Promise(resolve => {
      loadLazyFormItemOptions(sourceData, column).then(optionsMap => {
        const tableData = sourceData.map(data => {
          const rowData = enTableRowData(data, column, optionsMap)
          return { ...data, ...rowData }
        })
        resolve(tableData)
      })
    })
  } else {
    return Promise.resolve([])
  }
}
/**
 * 
 * @param {*} tragetProp 
 * = 'age'
 * @param {*} watchOption 
 * = {
 *  watch: ['nickName', 'address'],
 *  method: function() {}
 * }
 * @param {*} saveData 
 * ={
 *  nickName: {
 *    age: function() {}
 *  },
 *  address: {
 *    age: function() {}
 *  }
 * }
 */
export const assignWatchObj = (tragetProp, watchOption, saveData) => {
  if (!isWatchObj(watchOption)) { return }
  let watch = watchOption.watch
  if (!Array.isArray(watch)) {
    watch = [watchOption.watch]
  }
  watch.forEach(prop => {
    if (!saveData[prop]) {
      saveData[prop] = {}
    }
    saveData[prop][tragetProp] = watchOption.method
  })
}

export const assignDictOptions = (item, formItemOptions = {}, asyncFormItemOptions = {}, watchFormItemOptions = {}) => {
  if (item && hasOptionsByType(item.type)) {
    formItemOptions[item.prop] = Array.isArray(item.options) ? item.options : []
    if (typeof item.options === 'function') {
      asyncFormItemOptions[item.prop] = item.options()
    } else if (isWatchObj(item.options)) {
      assignWatchObj(item.prop, item.options, watchFormItemOptions)
    }
    if (Array.isArray(item.children) && item.children.length > 0) {
      item.children.forEach(childItem => {
        assignDictOptions(childItem, formItemOptions, asyncFormItemOptions, watchFormItemOptions)
      })
    }
  }
}
export const assignDisplay = (item, data = {}, displayMap = {}, watchDisplayMap = {}) => {
  displayMap[item.prop] = item.display === false ? false : true
  if (typeof item.display === 'function') {
    displayMap[item.prop] = item.display(deepClone(data))
  } else if (isWatchObj(item.display)) {
    assignWatchObj(item.prop, item.display, watchDisplayMap)
  }
}
export const assignDisabled = (item, data = {}, disabledMap = {}, watchDisabledMap = {}, formType) => {
  disabledMap[item.prop] = item.disabled === true ? true : formType === 'view'
  if (typeof item.disabled === 'function') {
    disabledMap[item.prop] = item.disabled(deepClone(data))
  } else if (isWatchObj(item.disabled)) {
    assignWatchObj(item.prop, item.disabled, watchDisabledMap)
  }
}
export const extElFormCompProps = (option, item) => {
  const elProps = filterElFormComponentProps(item)
  const component = type2Component(item.type)
  elProps.clearable = elProps.clearable !== false
  if (isNull(item.placeholder)) {
    elProps.placeholder = ['input', 'sptextarea'].includes(component) ? '请输入' + item.label : '请选择' + item.label
  }
  if(item.type && item.type.search('range') !== -1) {
    elProps.unlinkPanels = item.unlinkPanels !== false
  }
  if (item.type === 'elupload') {
    if (!isNull(option.uploadAction)) {
      elProps.action = option.uploadAction
    }
    if (!isNull(option.uploadHeaders)) {
      elProps.headers = option.uploadHeaders
    }
  }    
  return elProps
}
export const extElFormItemProps = (option, item) => {
  const formItemProps = filterElFormItemProps(item)
  const labelWidth = item.labelWidth || option.labelWidth
  if (typeof labelWidth === 'number') {
    formItemProps.labelWidth = labelWidth + 'px'
  } else {
    formItemProps.labelWidth = labelWidth
  }
  return formItemProps
}
export const extElTableColumnProps = (option = {}, item) => {
  const elProps = filterElTableColumnProps(item)
  elProps.align = elProps.align || option.align || 'center'
  elProps.label = item.cellLabel || item.label
  return elProps
}
export const extSpTableColumn = (option = {}) => {
  const column = Array.isArray(option.column) ? option.column : []
  return column.filter(item => item.hide !== true).map(item => {
    const children = Array.isArray(item.children) ? extSpTableColumn({ ...option, column: item.children }) : null
    const elProps = extElTableColumnProps(option, item)
    return {
      prop: item.prop,
      label: item.label,
      type: item.slot ? 'slot' : item.type,
      elProps,
      children
    }
  })
}
export const structuredWatchData = (watchOptions) => {
  const watchMethods = {}
  for(const prop in watchOptions) {
    const targets = watchOptions[prop]
    if (targets) {
      for(const targetProp in targets) {
        if (!watchMethods[targetProp] && typeof targets[targetProp] === 'function') {
          watchMethods[targetProp] = targets[targetProp]
        }
      }
    }
  }
  return watchMethods
}
export const getResByAsyncObj = (asyncObj) => {
  if (isNull(asyncObj)) { return Promise.resolve({}) }
  const promiseList = Object.values(asyncObj)
  const propList = Object.keys(asyncObj)
  const propRes = {}
  return new Promise(resolve => {
    Promise.all(promiseList).then(resList => {
      resList.forEach((res, index) => {
        const prop = propList[index]
        propRes[prop] = res
      })
      resolve(propRes)
    }).catch(() => {
      resolve(propRes)
    })
  })  
}
export const loadLazyFormItemOptions = (data = {}, column = []) => {
  const staticColumns = column.filter(item => Array.isArray(item.options))
  const remoteMethodColumns = column.filter(item => typeof item.remoteMethod === 'function')
  const asyncColumns = column.filter(item => typeof item.options === 'function')
  const watchColumns = column.filter(item => isWatchObj(item.options))
  const watchObj = {}
  staticColumns.forEach(item => {
    watchObj[item.prop] = item.options
  })
  if (Array.isArray(data) && data.length > 0) {
    asyncColumns.forEach(item => {
      watchObj[item.prop] = item.options(data[0])
    })
    remoteMethodColumns.forEach(item => {
      data.forEach(idata => {
        let prop = idata[item.prop]
        prop = isNull(prop) || Array.isArray(prop) ? null : item.prop + '_' + prop
        if (prop && !watchObj[prop]) {
          watchObj[prop] = item.remoteMethod(idata[item.prop], idata)
        }
      })
    })    
    watchColumns.forEach(item => {
      data.forEach(idata => {
        const prop = propKeyWithWatchData(item, idata)
        if (prop && !watchObj[prop]) {
          const watchValue = getWatchPropValue(item.options, idata, {})
          const sdata = deepClone(idata)
          watchObj[prop] = item.options.method(sdata, null, watchValue)
        }
      })
    })
  } else {
    asyncColumns.forEach(item => {
      watchObj[item.prop] = item.options(data)
    })    
    remoteMethodColumns.forEach(item => {
      watchObj[item.prop] = item.remoteMethod(data[item.prop], data)
    })    
    watchColumns.forEach(item => {
      const watchValue = getWatchPropValue(item.options, data, {})
      const sdata = deepClone(data)
      watchObj[item.prop] = item.options.method(sdata, null, watchValue)
    })
  }
  return getResByAsyncObj(watchObj)
}
const propKeyWithWatchData = (item = {}, data = {}) => {
  if (isWatchObj(item.options)) {
    let watch = item.options.watch
    watch = Array.isArray(watch) ? watch : typeof watch === 'string' ? [watch] : []
    if (watch.length > 0) {
      const propKey = watch.reduce((key, prop) => {
        if (isNull(data[prop]) || Array.isArray(data[prop])) {
          return key
        } else {
          return key + '_' + data[prop]
        }
      }, '')
      if (propKey) {
        return item.prop + propKey
      }
    }
  }
  return null
}
export const getWatchPropValue = (watchOption = {}, data, optionsMap) => {
  let value = {}
  if(isWatchObj(watchOption)) {
    let watchProps = watchOption.watch
    watchProps = Array.isArray(watchProps) ? watchProps : [watchProps]
    watchProps.forEach(prop => {
      if (data[prop] === null || data[prop] === undefined) {
        value[prop] = null
      } else {
        // 值匹配的某个选项对象，如果没有，返回源值
        const options = Array.isArray(optionsMap[prop]) ? optionsMap[prop] : []
        if (Array.isArray(data[prop])) {
          const optionList = options.filter(item => !isNull(item.value) && data[prop].includes(item.value))
          value[prop] = optionList.length === 0 ? data[prop] : optionList
        } else {
          const option = options.find(item => !isNull(item.value) && item.value.toString() === data[prop].toString())
          value[prop] = !option ? data[prop] : option
        }
      }
    })
    return value
  }
  return value
}
export const runWatchMethod = (prop, data = {}, key = 'options', watchObj = {}, column = [], optionsMap = {}) => {
  let tprops = null
  if (typeof prop === 'string') {
    tprops = watchObj[prop]
  } else {
    tprops = structuredWatchData(watchObj)
  }
  if (!isNull(tprops)) {
    const res = {}
    for(const tprop in tprops)  {
      if (typeof tprops[tprop] === 'function') {
        const cloneData = deepClone(data)
        const item = column.find(item => item.prop === tprop)
        const watchValue = getWatchPropValue(item[key], cloneData, optionsMap)
        const resVal = tprops[tprop](cloneData, prop, watchValue) 
        if (key === 'disabled') {
          res[tprop] = !resVal ? false : true
        } else {
          res[tprop] = resVal
        }
      }
    }
    return res
  }  
}
// 重置表格列样式，此方法会改变传入的参数对象
export const resetColumnStyle = (option) => {
  if (option && Array.isArray(option.column) && option.column.length > 0) {
    option.column.forEach(item => {
      if (Array.isArray(item.children) && item.children.length > 0 && !isNaN(item.width)) {
        const childrenWidth = Number(item.width) / item.children.length
        item.children.forEach(child => {
          child.width = childrenWidth
        })
      }      
    })
  }
  return option
}
