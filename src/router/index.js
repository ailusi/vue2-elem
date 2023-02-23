import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/Home.vue'
import Welcome from '@/views/home/Welcome.vue'
import Users from '@/views/user/User.vue'
import Rights from '@/views/Rights/Rights.vue'
import Roles from '@/views/Roles/Roles.vue'
import Cate from '@/views/goods/Cate.vue'
import Params from '@/views/goods/Params.vue'
import Lists from '@/views/goods/List.vue'
import Add from '@/views/goods/Add.vue'
import Order from '@/views/order/Order.vue'
import Report from '@/views/report/Report.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: Lists
      },
      {
        path: '/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
// to将要访问的路径 frrom代表从哪个路径跳转而来 next是一个函数，表示放行
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
