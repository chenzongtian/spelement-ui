import SpForm from './form'
import SpFormDynamic from './form-dynamic'
import SpFormGroup from './form-group'
import SpTable from './table'
import SpTableForm from './table-form'
import SpCrudForm from './crud-form'
import SpCrud from './crud'
import SpTree from './tree'
import SpTreeSelect from './tree-select'
import SpColumnBoard from './column-board'
import SpUpload from './upload'
import SpTextarea from './textarea'
import SpContextmenu from './contextmenu'
import SpEmpty from './empty'
import visibleHeight from './directives/DivisibleHeight'
import './styles/spelement.ui.scss'
const components = [
  SpTable,
  SpTableForm,
  SpForm,
  SpFormDynamic,
  SpFormGroup,
  SpCrud,
  SpTree,
  SpTreeSelect,
  SpColumnBoard,
  SpUpload,
  SpTextarea,
  SpContextmenu,
  SpEmpty,
  SpCrudForm
]
const directives = {
  visibleHeight
}
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, {
      extends: component,
      data() {
        return {
          useOptions: opts
        }
      }
    })
  })
  // 注册自定义指令
  for(const DiName in directives) {
    Vue.directive(DiName, directives[DiName])
  }
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
