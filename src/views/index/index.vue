<template>
    <div class="index">
        <AwHeader class="aboutUs_header" ref="aboutUs_header"></AwHeader>
        <!-- <div class="page">
            <h1>{{ msg }}</h1>
        </div> -->
        <Banner :BannerHeight="BannerHeight"></Banner>
        <AwFooter></AwFooter>
    </div>
</template>

<script>
import Banner from './Banner'
import AwHeader from '../../publicComponents/Header'
import AwFooter from '../../publicComponents/Footer'
export default {
    name: "index",
    components: {
        AwHeader,
        AwFooter,
        Banner
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
</style>
