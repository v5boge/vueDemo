import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
console.log(App);
var login = {
  template: '<h1>这是登录组件</h1>'
}
new Vue({
  el:'#app',
  router,
  store,
  render:h => h(App)
})
//.$mount('#app')
