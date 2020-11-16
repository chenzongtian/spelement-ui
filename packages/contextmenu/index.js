import Contextmenu from './src/index'
Contextmenu.install = function(Vue) {
  Vue.component(Contextmenu.name, Contextmenu)
}
export default Contextmenu