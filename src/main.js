import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import './style/global.css'

import axios from 'axios'
// 在vue的原型挂载axios
Vue.prototype.$http = axios
// 配置请求的根路径
axios.defaults.baseURL = 'https://www.fastmock.site/mock/b972782bf6bbf60ad4443a5248a62ebe/api'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
