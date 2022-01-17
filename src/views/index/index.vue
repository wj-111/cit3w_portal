<template>
    <div class="index">
        <AwHeader class="aboutUs_header"></AwHeader>
        <Banner></Banner>
        <OverLay></OverLay>
        <ServerComponent></ServerComponent>
        <AwFooter></AwFooter>
    </div>
</template>

<script>
import Banner from './Banner'
import OverLay from './OverLay'
import ServerComponent from './ServerComponent'
import AwHeader from '../../publicComponents/Header'
import AwFooter from '../../publicComponents/Footer'
export default {
    name: "index",
    components: {
        AwHeader,
        AwFooter,
        Banner,
        OverLay,
        ServerComponent
    },
    data() {
        return {
            msg: "这是首页",
            innerHeight: 0,
            scrollTop: 0
        };
    },
    methods: {
        getInnerHeight() {
            this.innerHeight = window.innerHeight
        },

        scrollHandle() {
            // 距离顶部的距离，考虑兼容性，三者都为0才认为是0
            this.scrollTop =
                document.documentElement.scrollTop
                || window.pageYOffset
                || document.body.scrollTop

            switch (true) {
                case this.scrollTop < 225:
                    console.log('top')
                    this.atTop = true
                    break
                case this.scrollTop <= this.innerHeight - 35:
                    this.$store.commit('setShadowActive', {
                        headerShadowActive: false
                    })
                    this.$store.commit('setNavDarkActive', {
                        navDarkActive: false
                    })
                    this.atTop = false
                    break
                default:
                    this.$store.commit('setShadowActive', {
                        headerShadowActive: true
                    })
                    this.$store.commit('setNavDarkActive', {
                        navDarkActive: true
                    })
                    this.atTop = false
            }

            // 滚动条滚动的距离
            const scrollStep = this.scrollTop - this.oldScrollTop
            // 更新——滚动前，滚动条距文档顶部的距离
            this.oldScrollTop = this.scrollTop
            if (scrollStep >= 0) {
                this.$store.commit('setHeaderShow', {
                    headerShow: true
                })
            } else {
                this.$store.commit('setHeaderShow', {
                    headerShow: false
                })
            }
        },
    },
    mounted() {
        // 获取页面高度 为header确定应该显示的状态
        this.getInnerHeight()
        window.addEventListener('resize', this.getInnerHeight)

        // 绑定页面的滚动事件(控制AwHeader)
        window.addEventListener('scroll', this.scrollHandle)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandle)
        window.removeEventListener('resize', this.getInnerHeight)
    }
}
</script>

<style scoped>
.page {
    padding-top: 60px;
}
.overlay {
    z-index: 666;
}
</style>
