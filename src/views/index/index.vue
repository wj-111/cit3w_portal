<template>
    <div class="index">
        <AwHeader class="aboutUs_header" ref="aboutUs_header"></AwHeader>
        <Banner :BannerHeight="BannerHeight"></Banner>
        <OverLay></OverLay>
        <!-- <div class="page">
            <h1>{{ msg }}</h1>
        </div> -->
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
            BannerHeight: '',
        };
    },
    mounted() {
        alert('原通行证系练习用途，有法律风险，临时迁移至cit3w.cn:8080，将于11月20日24:00关闭');
    }
};
</script>

<style scoped>
.page {
    padding-top: 60px;
}
.overlay {
    z-index: 666;
}
</style>
