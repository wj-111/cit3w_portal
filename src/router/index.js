import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue')
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/'
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "news" */ '../views/news/news.vue')
    },
    {
      path: '/productAndService',
      name: 'productAndService',
      component: () => import(/* webpackChunkName: "productAndService" */ '../views/productAndService/productAndService.vue')
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: () => import(/* webpackChunkName: "recruitment" */ '../views/recruitment/recruitment.vue')
    },
    {
      path: '/messageBoard',
      name: 'messageBoard',
      component: () => import(/* webpackChunkName: "messageBoard" */ '../views/messageBoard/messageBoard.vue')
    },
    {
      path: '*',
      name: 'index',
      redirect: '/'
    }
  ]
})
