import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // data
    state: {
        headerShadowActive: false,
        headerShow: false,
        navDarkActive: false,
        articlePath: ''
    },
    // 这边之后使用常量替代 Mutation 事件类型
    mutations: {
        // 底色
        setShadowActive(state, value) {
            state.headerShadowActive = value.headerShadowActive
        },
        // 是否展现header
        setHeaderShow(state, value) {
            state.headerShow = value.headerShow
        },
        // 字体颜色是否为黑
        setNavDarkActive(state, value) {
            state.navDarkActive = value.navDarkActive
        }
    },
    actions: {},
    modules: {}
})
