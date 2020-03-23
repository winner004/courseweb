import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import 'ant-design-vue/dist/antd.less'
Vue.config.productionTip = false

Vue.use(VueRouter)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
