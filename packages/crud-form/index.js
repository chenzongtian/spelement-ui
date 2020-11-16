// import Table from './src/main'
import CrudForm from './src/index'
CrudForm.install = function(Vue) {
  Vue.component(CrudForm.name, CrudForm)
}
export default CrudForm