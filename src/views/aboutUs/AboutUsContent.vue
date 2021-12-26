<template>
    <div class="index">
        <div class="profile list">
            <div class="title">
                <span class="main-title">社团简介</span>
                <br>
                <span class="sub-title">Association profile</span>
            </div>
            <div class="profile-content">
                <div class="profile-left">
                    <img :src="imageList.profile">
                </div>
                <div class="profile-right">
                    <h2>常州工学院-3w社团</h2>
                    <div class="">
                        {{profileText}}
                    </div>
                </div>
            </div>
        </div>
        <div class="mission list">
            <div class="image-box">
                <img :src="imageList.mission1">
            </div>
            <div class="mission-box">
                <div class="mission-left">
                    <div class="title" style="text-align: left;">
                        <span class="main-title">社团使命</span>
                        <br>
                        <span class="sub-title">Association mission</span>
                    </div>
                    <div class="mission-content">
                        {{missionText}}
                    </div>
                </div>
                <div class="mission-right">
                    <img :src="imageList.mission2">
                </div>
            </div>
        </div>
        <div class="development list">
            <div class="title">
                <span class="main-title">发展历程</span>
                <br>
                <span class="sub-title">The development Path</span>
                <div class="pathContent">
                    <img :src="imageList.development" alt="historyLine">
                </div>
            </div>
        </div>
        <h1>社团文化</h1>
        <h1>核心人员</h1>
        <h1>荣誉资质</h1>
    </div>
</template>

<script>
export default {
    name: "AboutUsContent",
    data() {
        return {
            imageList: {
                profile: require('../../assets/img/index/service2.png'),
                mission1: require('../../assets/img/aboutUs/bg1.png'),
                mission2: require('../../assets/img/aboutUs/image1.png'),
                development: require('../../assets/img/aboutUs/history_line.png')
            },
            profileText: '麦堤微林成立于2017年9月。是南京市独角兽培育企业、江苏省高新技术培育企业。办公地点位于六朝古都南京江宁区九龙湖畔，西望牛首山，东临方山，风景优美，交通便捷，区位优势显著。是一家专注于时空地理环境数据采集、存储、管理、分析、应用及可视化等相关技术产品研发及行业应用的高新技术研发企业。 公司具备成熟的数字孪生应用及3D GIS及地理空间对象可视化技术研发力量。致力成为以数字化产品及服务驱动行业管理转型发展的引领者、国内领先的数字企业软硬件方解决方案提供商及运营服务商。',
            missionText: '麦堤微林公司依托先进的数字孪生、GIS和BIM等技术研发成果，围绕时空大数据可视化平台研发应用为核心，面向行业，为不同领域的客户量身定制智慧化的综合管理解决方案，专注于为行业客户特定的应用场景进行精准建模，并在此基础上为客户搭建“功能全面、安全可靠、独具特色、响应及时、信息全视”五位一体的综合性可视化管理平台。'
        }
    },
};
</script>


<style lang = "less" scoped>
@text-line-height: 30px;
.aboutUs_header {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #eff0f1;
}
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
.list {
    margin: 50px 0;
}
.title {
    text-align: center;
    .main-title {
        font-size: 28px;
        color: #0d67d7;
    }
    .sub-title {
        font-size: 16px;
        color: #7c98ba;
    }
}
.profile {
    padding: 0 200px;
    .profile-content {
        display: flex;
        .profile-left {
            img {
                width: 500px;
                height: 300px;
                object-fit: cover;
                margin-top: 20px;
                margin-bottom: 20px;
                padding: 10px;
                border: #d3dce6 2px dashed;
            }
        }
        .profile-right {
            padding: 35px;
            padding-right: 0px;
            line-height: @text-line-height;
        }
    }
}
.mission {
    padding-top: 60px;
    position: relative;
    .image-box {
        position: absolute;
        top: 0px;
        z-index: -1;
        img {
            width: 100%;
        }
    }
    .mission-box {
        margin: 0 auto;
        padding: 10px;
        background-color: #ffffff;
        /* height: 220px; */
        width: 1080px;
        display: flex;
        /* border: 2px solid #000000; */
        box-shadow: 0 0 15px #8b8b8b;
        .mission-left {
            padding: 20px;
            .mission-content {
                line-height: @text-line-height;
            }
        }
        .mission-right {
            margin-left: auto;
        }
    }
    .mission-content {
    }
}
.pathContent {
    margin: 40px 0px;
    img {
        width: 85vw;
    }
}
</style>