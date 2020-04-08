import Vue from 'vue'
import course from "./users.vue"
import VueRouter from "vue-router"
import 'ant-design-vue/dist/antd.css'
Vue.use(VueRouter)

new Vue({
    render: h =>h(course),
}).$mount('#users')
