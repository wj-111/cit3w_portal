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
            path: '/aboutUs',
            name: 'aboutUs',
            component: () => import(/* webpackChunkName: "aboutUs" */ '../views/aboutUs/aboutUs.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import(/* webpackChunkName: "news" */ '../views/news/news.vue')
        },
        {
            path: '/newsDetail',
            name: 'newsDetail',
            component: () => import(/* webpackChunkName: "news" */ '../views/news/newsDetail.vue')
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
            path: '/todoList',
            name: 'todoList',
            component: () => import(/* webpackChunkName: "todoList" */ '../views/todoList/todoList.vue')
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
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

})
