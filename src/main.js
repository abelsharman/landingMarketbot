import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'
import store from './store'

global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $


Vue.use(Vue2TouchEvents)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

