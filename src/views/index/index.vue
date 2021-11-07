<template>
    <div class="index">
        <AwHeader class="aboutUs_header" ref="aboutUs_header"></AwHeader>
        <Banner :BannerHeight="BannerHeight"></Banner>
        <OverLay></OverLay>
        <div class="page">
            <h1>{{ msg }}</h1>
        </div>
        <AwFooter></AwFooter>
    </div>
</template>

<script>
import Banner from './Banner'
import OverLay from './OverLay'
import AwHeader from '../../publicComponents/Header'
import AwFooter from '../../publicComponents/Footer'
export default {
    name: "index",
    components: {
        AwHeader,
        AwFooter,
        Banner,
        OverLay
    },
    data() {
        return {
            msg: "这是首页",
            BannerHeight: '',
        };
    },
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
