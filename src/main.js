// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
import axios from './axios/index'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/style/common.css'

Vue.use(less)
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
