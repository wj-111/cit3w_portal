<template>
    <div class="banner">
        <div class="Limit">
            <!-- 走马灯 -->
            <el-carousel :interval="10000" arrow="hover" :height="BannerHeight+ 'px' " :autoplay="true" trigger="click" indicator-position="none">
                <el-carousel-item v-for="item in imgList" :key="item.id">
                    <div class="img_con">
                        <div class="img_cover"></div>
                        <img class="element-img" alt="" :src="item.imgUrl">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            BannerHeight: 722,
            imgList: [
                {
                    id: 0,
                    imgUrl: require('../../assets/img/index/school.jpg')
                }
                , {
                    id: 1,
                    imgUrl: require('../../assets/img/index/image2.jpg')
                }
            ]
        }
    },
    methods: {
        setBannerHeight() {
            this.BannerHeight = window.innerHeight
        },
    },
    mounted() {
        // 页面创建时执行一次setBannerHeight进行赋值，顺道绑定resize事件
        this.setBannerHeight()
        window.addEventListener('resize', this.setBannerHeight)
    },
}
</script>

<style lang = "less" scoped>
/* .img_cover{
  width: 100%;
  height: 100%;
  background: rgba(51,112,255,.2);
} */

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.img_con {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(51, 112, 255, 0.2);
        height: 100%;
        z-index: 666;
    }
}

.element-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/deep/ .el-carousel__arrow {
    width: 40px;
    height: 40px;
    font-size: 30px;
    background-color: rgba(255, 255, 255, 0.1);
}

/deep/ .el-carousel__arrow:hover {
    background-color: rgba(255, 255, 255, 0.3);
}
</style>
