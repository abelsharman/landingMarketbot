import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;


Vue.use(Vue2TouchEvents)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

