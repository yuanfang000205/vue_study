//配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  //默认路径
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  //将hash模式更改为history模式
  mode: 'history',
  //更改整个class样式名称
  linkActiveClass: 'active'
})

// 3.将router对象传入到Vue实例中
export default router
