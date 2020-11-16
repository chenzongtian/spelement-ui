// import Table from './src/main'
import Crud from './src/index'
Crud.install = function(Vue) {
  Vue.component(Crud.name, Crud)
}
export default Crud