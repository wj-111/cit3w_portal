<template>
  <div class="index">
    <div class="profile list">
      <div class="title">
        <span class="main-title">社团简介</span>
        <br />
        <span class="sub-title">Association profile</span>
      </div>
      <div class="profile-content">
        <div class="profile-left">
          <img :src="imageList.profile" />
        </div>
        <div class="profile-right">
          <h2>常州工学院-3w社团</h2>
          <div class="">
            {{ profileText }}
          </div>
        </div>
      </div>
    </div>
    <div class="mission list">
      <div class="image-box">
        <img :src="imageList.mission1" />
      </div>
      <div class="mission-box">
        <div class="mission-left">
          <div class="title" style="text-align: left">
            <span class="main-title">社团使命</span>
            <br />
            <span class="sub-title">Association mission</span>
          </div>
          <div class="mission-content">
            {{ missionText }}
          </div>
        </div>
        <div class="mission-right">
          <img :src="imageList.mission2" />
        </div>
      </div>
    </div>
    <div class="development list">
      <div class="title">
        <span class="main-title">发展历程</span>
        <br />
        <span class="sub-title">The development Path</span>
        <div class="pathContent">
          <img :src="imageList.development" alt="historyLine" />
        </div>
      </div>
    </div>
    <div class="culture list">
      <div class="title">
        <span class="main-title"> 社团文化 </span>
        <br />
        <span class="sub-title"> association culture </span>
      </div>
      <div class="row">
        <div class="first">
          <div class="culture-block">
            <div class="imgSrc">
              <img :src="imageList.culture1" alt="" />
            </div>
            <div class="content-box">
              <p>周会</p>
              <p>
                {{ culturetext1 }}
              </p>
            </div>
          </div>
        </div>
        <div class="second">
          <div class="culture-block">
            <div class="imgSrc">
              <img :src="imageList.culture2" alt="" />
            </div>
            <div class="content-box">
              <p>自习</p>
              <p>
                {{ culturetext2 }}
              </p>
            </div>
          </div>
        </div>
        <div class="third">
          <div class="culture-block">
            <div class="imgSrc">
              <img :src="imageList.culture3" alt="" />
            </div>
            <div class="content-box">
              <p>团建</p>
              <p>
                {{ culturetext3 }}
              </p>
            </div>
          </div>
        </div>
        <div class="forth">
          <div class="culture-block">
            <div class="imgSrc">
              <img :src="imageList.culture4" alt="" />
            </div>
            <div class="content-box">
              <p>合作</p>
              <p>
                {{ culturetext4 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h1>社团文化</h1> -->
    <div class="team list">
      <div class="title">
        <span class="main-title"> 核心人员 </span>
        <br />
        <span class="sub-title"> core staff </span>
      </div>
      <div class="team-row">
        <div class="textleft">
          <p>3W主要成员</p>
          <p>{{teamtext1}}</p>
        </div>
        <div class="textright">
          <img :src="imageList.team1" alt="" width="100%">
        </div>
      </div>
    </div>
    <!-- <h1>核心人员</h1> -->
    <!-- <h1>荣誉资质</h1> -->
    <div class="honorary">
      <div class="title">
        <span class="main-title"> 荣誉资质 </span>
        <br />
        <span class="sub-title"> Honors and Qualifications </span>
      </div>
    </div>
    <div class="viewers">
      <ul class="views">
        <li class="img">
          <div class="imgSrc">
            <img :src="imageList.Honors1" alt="" width="100%">
          </div>
          <p>证书</p>
        </li>
        <li class="img">
          <div class="imgSrc">
            <img :src="imageList.Honors2" alt="" width="100%">
          </div>
          <p>证书</p>
        </li>
        <li class="img">
          <div class="imgSrc">
            <img :src="imageList.Honors3" alt="" width="100%">
          </div>
          <p>证书</p>
        </li>
        <li class="img">
          <div class="imgSrc">
            <img :src="imageList.Honors4" alt="" width="100%">
          </div>
          <p>证书</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsContent",
  data() {
    return {
      imageList: {
        profile: require("../../assets/img/index/service2.png"),
        mission1: require("../../assets/img/aboutUs/bg1.png"),
        mission2: require("../../assets/img/aboutUs/image1.png"),
        development: require("../../assets/img/aboutUs/history_line.png"),
        // 图片资源
        culture1: require("../../assets/img/culture/1.jpg"),
        culture2: require("../../assets/img/culture/2.jpg"),
        culture3: require("../../assets/img/culture/3.jpg"),
        culture4: require("../../assets/img/culture/4.jpg"),
        team1: require('../../assets/img/teams/1.png'),
        Honors1: require('../../assets/img/honors/1.png'),
        Honors2: require('../../assets/img/honors/2.png'),
        Honors3: require('../../assets/img/honors/3.png'),
        Honors4: require('../../assets/img/honors/4.png')

      },
      profileText:
        "3W社，原先是用来3D建模，后来就大家聚在一起形成了一个工作室，我们的主要目的就是大家一起学习，相互促进",
      missionText:
        "我们是应用型培养，我们希望每一个社员可以在社团中有所成长，老老实实的写程序，本本分分地提高自己的业务能力，这样就可以减轻在行业竞争中的压力，提高自己的不可替代性，从而对抗内卷，给每一个成员都可以赢在起跑线上。我们社的名字也有很好的寓意，我们希望每一位成员都可以挣上3W。当然3W也可以理解为'Who What Why',就是谁去做，做些什么，为什么，我们需要去做，做一些可以提高自己技术的事情，为的就是可以挣得3W，当然你也可以说是为了万维网事业。",
      culturetext1:
        "每周开展周会，成员将每周的学习情况，学习成果在周报里和大家分享，这样可以产生了解成员的学习进度，并且促进大家一起学习，在周会上，可以抛出疑问，老学长也会提出一些建议",
      culturetext2:
        "我们允许社员任何时间来工作室进行自习，当然也可以携带同学，我们可以想为社团的每一位成员提供集中的学习环境，这样可以方便问题的探讨，可以很好的促进成员的关系",
      culturetext3:
        "团建可以很好的让成员之间进行融洽，可以带动整个社团的氛围，增进社员之间的友谊，这样也为后续的日常学习有很大的好处",
      culturetext4:
        "在工作室，我们会接触很多的老师，学长，我们可以与他们合作，向他们学习。我们使用Git，这样更加方便协作",
      teamtext1:
      '目前有能力厉害的一些学长，但是即将毕业或者实训，也有需要成长的社员。我们主要是应用型，合作做一些小案例，大家一起学习。目前有王杰，张从龙，汝陈琳，朱漫妮，蒋美玲等等，我们依然在寻找一些想要学习的成员加入我们，希望可以把队伍壮大起来'  
    };
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
  /* .mission-content {
  } */
}
.pathContent {
  margin: 40px 0px;
  img {
    width: 85vw;
  }
}
.culture {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3%;
}
.row {
  float: left;
  width: 100%;
  font-weight: 500;
  overflow: hidden;
  line-height: 1.5;
  margin-top: 3%;
  /* flex-wrap: wrap;
    align-content: flex-start; */
  /* justify-content: center; */
}
.first,
.second,
.third,
.forth {
  float: left;
  width: 49%;
  /* height: 274px; */
  /* border: 1px solid black; */
  /* box-sizing: border-box; */
  /* justify-content: center; */
  background: #f4f4f4f4;
  margin-bottom: 20px;
  margin-right: 10px;
  /* margin-right: 0; */
  /* margin: 0 auto; */
}
/* .first:hover,.forth:hover,.second:hover,.third:hover{
  border-bottom: 1px solid skyblue;
} */
.culture-block {
  display: flex;
  align-items: center;
  height: 274px;
}
.culture-block .content-box {
  /* flex: 1; */
  width: 50%;
}
.culture-block .imgSrc {
  /* flex: 1; */
  width: 50%;
}

.content-box p:first-child {
  font-size: 20px;
  font-weight: 400;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0;
  color: #222;
}
.content-box p:last-child {
  font-weight: 500;
}


.team-row{
  position: relative;
  /* float: left; */
  /* width: 66%; */
  padding: 10px;
  background: #f8f8f8f8;
  margin-right: -15px;
  margin-left: -15px;
  font-weight: 500;
  margin-top: 3%;
  /* overflow: hidden; */
}
.textleft{
  width: 60%;
  padding: 3%;
}
.textleft p:first-child{
  padding: 40px;
  font-size: 22px;
  font-weight: 700;
  line-height: 51px;
  letter-spacing: 0;
  /* color: red; */
  margin-bottom: 20px;

}
.textleft p:last-child{
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0;
  color: #333;
}
.textright{
  /* float: right; */
  position:absolute;
  right: 2%;
  top: 3%;
  width: 33%;
}
.viewers{
  /* float: left; */
  width: 100%;
  margin-top: 3%;
  /* overflow: hidden; */
}
.views{
  overflow: hidden;
}
.viewers .img{
  float: left;
  width: 23%;
  /* height: 480px; */
  border: 1px solid transparent;
  margin: 10px;
  height: 472px;
  /* text-align: center; */
}
.viewers .img:hover{
  border: 1px solid rgb(90, 141, 156);
}
.viewers .img p{
  text-align: center;
}
.viewers .imgSrc{
  width: 100%;
  height: 414px;
}
</style>