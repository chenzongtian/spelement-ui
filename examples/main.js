import Vue from 'vue'
import App from './App.vue'
import packages from '../packages/index'
Vue.config.productionTip = false
Vue.use(packages)
new Vue({
  render: h => h(App),
}).$mount('#app')
