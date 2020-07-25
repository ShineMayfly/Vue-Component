import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index'
// import { resolve } from '../../build/webpack.base.conf'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: login
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '主页'
      },
      component: () => import('@/layout/index')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
