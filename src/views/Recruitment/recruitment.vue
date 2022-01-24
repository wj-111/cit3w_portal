<template>
    <div class="recruitment">
        <AwHeader class="aboutUs_header" ref="aboutUs_header"></AwHeader>
        <div class="page">
            <div class="banner">
                <h1 class="banner-heading">招新说明</h1>
                <div class="banner-subheading">3w社 2022年招新</div>
                <!-- <img class="banner-img" src="../../assets/img/recruitment/banner.png" alt="banner"> -->
            </div>
            <el-tabs class="el-tabs" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane class="el-tab" label="用户管理" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
        <AwFooter></AwFooter>
    </div>
</template>

<script>
import AwHeader from '../../publicComponents/Header'
import AwFooter from '../../publicComponents/Footer'



export default {
    name: "recruitment",
    components: {
        AwHeader,
        AwFooter
    },
    data() {
        return {
            activeName: 'second'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style lang = "less" scoped>
* {
    margin: 0;
    padding: 0;
}
.page {
    padding-top: 60px;
    .banner {
        width: 100%;
        height: 270px;
        background: url("../../assets/img/recruitment/banner.png") 50% no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        letter-spacing: 7px;

        .banner-subheading {
            margin-top: 20px;
        }
    }
    .el-tabs {
        height: 200px;
    }
    /deep/ .el-tabs__nav-scroll {
        padding-top: 20px;
    }
}
</style>
