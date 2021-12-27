<template>
    <div class="news-card">
        <el-card shadow="never" v-for="(item,index) in recomNews" :key="index">
            <router-link to="/">
                <div class="news-card-item">
                    <!-- <img :src="item.cover_img" alt=""> -->
                    <img src="https://xanadu.aerowang.cn/server/static/upload/20211023/16349529030189971.jpg" alt="">

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
                { title: '1' },
                { title: '2' },
                { title: '3' },
                { title: '4' },
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