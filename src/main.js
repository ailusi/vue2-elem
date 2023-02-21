import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icon from './style/fonts/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import './style/global.css'

import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'

// 在vue的原型挂载axios
Vue.prototype.$http = axios
// 配置请求的根路径
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
// 配置拦截器
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
Vue.use(ElementUI)
Vue.use(icon)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
