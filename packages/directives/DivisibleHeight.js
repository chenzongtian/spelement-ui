// v-visibleHeight:500=".el-table__body-wrapper"
import { getClientInfo } from '../util/client.js'
export default {
  inserted: function(el, binding, vnode) {
    const { value, arg } = binding
    let childSelector = value
    if (typeof value === 'function') {
      childSelector = value()
    }
        
    if (el && childSelector !== false) {
      let targetDom = el
      if (childSelector) {
        targetDom = el.querySelector(childSelector)
      }
      if (targetDom) {
        const { clientHeight } = getClientInfo()
        const { top } = targetDom.getBoundingClientRect()
        const height = isNaN(arg) ? 0 : Number(arg)
        const maxHeight = clientHeight - top - height
        
        vnode.set('maxHeight', maxHeight)
      }
    }
  }
}