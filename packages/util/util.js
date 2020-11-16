export const deepClone = (need) => {
  if (!need || typeof need !== 'object') {
    return need
  }
  if (Array.isArray(need)) {
    return need.map(item => {
      return deepClone(item)
    })
  }
  const needClone = {}
  for (const key in need) {
    if (!need[key] || typeof need[key] !== 'object') {
      needClone[key] = need[key]
    } else {
      needClone[key] = deepClone(need[key])
    }
  }
  return needClone
}
/**
 * 判断是否为空
 */
export function isNull(need) {
  if (!isDef(need)) { return true }
  if (typeof need === 'string' && need.trim().length === 0) { return true }
  if (Array.isArray(need) && need.length === 0) { return true }
  if (need instanceof Object && Object.keys(need).length === 0) { return true }
  return false
}
export function isObjEmpty(obj) {
  if (obj) {
    for(const key in obj) {
      if(!isNull(obj[key])) {
        return false
      }
    }
  }
  return true
}
export function getLabelWithOptions(options, value) {
  let label = null
  if (Array.isArray(value)) {
    label = value.map(ival => {
      const ilabel = findItemFromDeepOptions(options, ival)
      return isNull(ilabel) ? ival : ilabel
    }).join(',')
  } else {
    label = findItemFromDeepOptions(options, value)
  }
  return isNull(label) ? value : label
}
export function findItemFromDeepOptions(options, value) {
  if (!Array.isArray(options) || isNull(value)) { return value }
  const item = options.find(item => !isNull(item.value) && item.value.toString() === value.toString())
  if (item){
    return item.label
  } else {
    const nextOpitons = options.filter(item => Array.isArray(item.children)).reduce((res, item) => {
      return res.concat(item.children)
    }, [])
    if (nextOpitons.length > 0) {
      return findItemFromDeepOptions(nextOpitons, value)
    }
  }
  return null
}


export function isEqual(a, b) {
  if (a === b || Object.is(a, b)) { return true }
  if (typeof a != typeof b || typeof a !== 'object' || typeof b !== 'object') {
    return String(a) === String(b)
  }
  if (Array.isArray(a) && a.length !== b.length) { return false }
  if (Object.keys(a).length !== Object.keys(b).length) { return false }
  for (const key in a) {
    if (!isEqual(a[key], b[key])) {
      return false
    }
  }
  return true
}

export function dataWithColumn(column) {
  const data = {}
  if (Array.isArray(column)) {
    column.forEach(item => {
      data[item.prop] = item.defaultValue
    })
  }
  return data
}

export function isDef(need) {
  return need !== undefined && need !== null
}

export function toNumber(need) {
  if (!isDef(need) || isNaN(need)) { return null }
  return Number(need)
}