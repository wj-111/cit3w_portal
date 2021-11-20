<template>
    <div class="index">
        <AwHeader class="aboutUs_header" ref="aboutUs_header"></AwHeader>

        <div class="banner">和优秀的人，做有挑战的事</div>

        <AwFooter></AwFooter>
    </div>
</template>

<script>
import AwHeader from '../../publicComponents/Header'
import AwFooter from '../../publicComponents/Footer'
export default {
    name: "aboutUs",
    components: {
        AwHeader,
        AwFooter
    },
    data() {
        return {
            msg: "这是关于我们",
        };
    },
};
</script>


<style lang = "less" scoped>
/* @import "../../assets/style/variable.less"; */
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