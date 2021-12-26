<template>
    <div class="index">
        <PublicHeader class="aboutUs_header"></PublicHeader>
        <div class="banner">和优秀的人，做有挑战的事</div>
        <AboutUsContent></AboutUsContent>
        <PublicFooter></PublicFooter>
    </div>
</template>

<script>
import PublicHeader from '../../publicComponents/Header'
import PublicFooter from '../../publicComponents/Footer'
import AboutUsContent from './AboutUsContent'
export default {
    name: "aboutUs",
    components: {
        PublicHeader,
        PublicFooter,
        AboutUsContent
    },
    data() {
        return {
            msg: "这是关于我们",
        };
    },
};
</script>


<style lang = "less" scoped>
.page {
    padding-top: 60px;
}
.banner {
    height: 400px;
    line-height: 400px;
    color: #fff;
    width: 100%;
    min-width: @main-width;
    background-image: url("//sf1-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/joblistbanner2x.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    font-size: @font-size-larger;
}
</style>