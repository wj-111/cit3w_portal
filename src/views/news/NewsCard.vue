<template>
    <div class="news-card">
        <el-card shadow="never" v-for="(item,index) in recomNews" :key="index">
            <router-link to="/">
                <div class="news-card-item">
                    <!-- <img :src="item.cover_img" alt=""> -->
                    <img :src="item.img">

                    <p class="item-mask"><span>{{ item.title }}</span></p>
                    <!-- <p class="item-mask"><span>{{ item.news_title }}</span></p> -->
                </div>
            </router-link>
        </el-card>
    </div>

</template>

<script>

export default {
    name: "news",
    data() {
        return {
            recomNews: [
                { title: '我校2019年立项省教改课题顺利通过结题验收', img: require('../../assets/img/news/1.png') },
                { title: '我校顺利完成2021年第二批新增学士学位授权专业审核工作', img: require('../../assets/img/news/2.png') },
                { title: '学校举办第二期虚拟仿真实验教学项目培训会', img: require('../../assets/img/news/3.png') },
                { title: '校长汤正华率团参加长三角现代产业学院建设高峰论坛暨长三角现代产业学院协同育人联盟成立大会', img: require('../../assets/img/news/4.png') },
            ]
        };
    },
    methods: {

    }

}
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}
.news-card {
    padding-top: 40px;
    margin: 0 auto 50px auto;
    display: flex;
    justify-content: space-evenly;
    //background-color: #d3dce6;
    .el-card {
        width: 280px;
        height: 160px;
        overflow: hidden;
        color: #ffffff;
    }

    .news-card-item {
        width: 280px;
        height: 160px;
        position: relative;
        cursor: pointer;

        .item-mask {
            position: absolute;
            background: linear-gradient(transparent, #030822);
            left: 0;
            bottom: 0;
            width: 100%;
            padding: 50px 20px;
            height: 97px;
            box-sizing: border-box;
        }

        span {
            color: #fff;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }

    .news-card-item:hover img {
        transform: scale(1.02);
    }

    /deep/ .el-card__body {
        padding: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
    }
}
</style>