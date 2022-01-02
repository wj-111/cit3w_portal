<template>
    <div class="news">
        <AwHeader class="news-header" ref="news-header"></AwHeader>
        <TitleSearch></TitleSearch>

        <div class="news-container">
            <NewsCard></NewsCard>

            <div class="news-list">
                <el-tabs class="list-left" v-model="pageInfo.activeName" @tab-click="handleClick">
                    <el-tab-pane :label="newsTabs[0].name" :name="newsTabs[0].id">
                        <NewsList :items="newsItems.list"></NewsList>
                    </el-tab-pane>
                    <el-tab-pane :label="newsTabs[1].name" :name="newsTabs[1].id">
                        <NewsList :items="newsItems.list"></NewsList>
                    </el-tab-pane>
                    <el-tab-pane :label="newsTabs[2].name" :name="newsTabs[2].id">
                        <NewsList :items="newsItems.list"></NewsList>
                    </el-tab-pane>
                    <!-- 多页内容是否能回退至顶部待验证 -->
                    <el-pagination class="pagination" background @current-change="handleCurrentChange" :current-page.sync="pageInfo.pageNum"
                                   :page-size="pageInfo.pageSize" layout="prev, pager, next, jumper" :total="newsItems.total"
                                   :hide-on-single-page="singlePage"
                                   v-scroll-to="{ element: '.news-container',duration: 300, easing: 'ease',offset: -40  }">
                    </el-pagination>
                </el-tabs>
                <div class="list-right">
                    <div class="search-by-date">
                        <p>按日期搜索：</p>
                        <el-date-picker v-model="pageInfo.selectDate" type="month" placeholder="选择日期" value-format="yyyy-MM"
                                        @change="searchByDate(pageInfo.selectDate)">
                        </el-date-picker>
                    </div>
                    <HotNews></HotNews>
                </div>
            </div>
        </div>

        <AwFooter></AwFooter>
    </div>
</template>
<script>
import AwHeader from '../../publicComponents/Header'
import AwFooter from '../../publicComponents/Footer'
import TitleSearch from './TitleSearch'
import NewsCard from './NewsCard'
import NewsList from './NewsList'
import HotNews from './HotNews'


export default {
    name: "news",
    components: {
        AwHeader,
        AwFooter,
        TitleSearch,
        NewsCard,
        NewsList,
        HotNews
    },
    data() {
        return {
            newsTabs: [
                {
                    id: '1',
                    name: '最新动态'
                },
                {
                    id: '2',
                    name: '典型案例'
                },
                {
                    id: '3',
                    name: '通知公告'
                }
            ],
            newsItems: {},
            pageInfo: {
                activeName: '1',
                // 当前页码
                pageNum: 1,
                // 当前每页显示多少条数据
                pageSize: 14,
                time: 30,
                selectDate: ''
            },
        };
    },
    methods: {
        handleClick(tab, event) {
            this.getNewsItems()
        },

        // 新闻列表页码切换
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`)
            this.getNewsItems()
            document.body.scrollTop = document.documentElement.scrollTop = 700;
        },

        // 新闻列表按照日期查询
        searchByDate(data) {
            // console.log(data)
            this.getNewsItems()
        },


        async getNewsItems() {




            // const { data: res } = await this.$http.get('/web/newslist', { params: this.pageInfo })
            let res = await this.$http.get('/article/searchByTime', { params: this.pageInfo })


            // let res = await this.$http.get('http://106.15.42.201:8900/article/searchByTime?pageNum=1&pageSize=14&time=7')

            if (res.status !== 200) {
                console.log(res)
                this.newsItems = {}
            } else {
                // this.$message.success('获取成功')
                let tempNewsItems = res.data.data
                // console.log(tempNewsItems)

                let fixedList = []
                tempNewsItems.records.map((value, index) => {
                    let tempListData = {}
                    tempListData.cover_img = 'https://xanadu.aerowang.cn/server/static/upload/20211023/16349529030189971.jpg'

                    tempListData.news_desc = value.articleTitle

                    // console.log(a.spl)
                    let guanyuIndex = value.articleTitle.indexOf('于');
                    if (guanyuIndex != -1) {
                        tempListData.news_desc = value.articleTitle.slice(guanyuIndex + 1)
                    }

                    tempListData.news_id = value.articleId
                    tempListData.news_title = value.articleTitle
                    tempListData.news_path = value.articleId
                    tempListData.publish_time = value.publish_time
                    tempListData.state = true
                    tempListData.type = 1
                    tempListData.update_time = value.publish_time
                    // console.log(tempListData)
                    fixedList.push(tempListData)
                })

                this.newsItems = {
                    total: tempNewsItems.total,
                    limit: tempNewsItems.size,
                    list: fixedList
                }

                // console.log(this.newsItems)
                if (this.newsItems.total <= this.newsItems.limit) {
                    this.singlePage = true
                }
            }
        },



        // 获取新闻
        // async getNewsItems() {
        //     this.newsItems = {}
        // https://api.aerowang.cn/xanadu/web/newslist?activeName=1&pageNum=1&pageSize=10&selectDate=
        // const { data: res } = await this.$http.get('/article/fuzzySearch?pageNum=1&pageSize=14&search=' + queryString)
        // if (res.status !== 200) {
        //     this.newsItems = {}
        // } else {
        //     // this.$message.success('获取成功')
        //     this.newsItems = res.data
        //     if (this.newsItems.total <= this.newsItems.limit) {
        //         this.singlePage = true
        //     }
        // }
        // },
    },
    created() {
        this.getNewsItems()
        // this.getRecomNews()
    },
};
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}

.news-container {
    max-width: 1200px;
    //background: #d3dce6;
    min-height: 580px;
    margin: 0 auto;

    .news-list {
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    .news-list:after {
        content: "";
        position: absolute;
        left: 0;
        top: 43px;
        width: 100%;
        height: 2px;
        background-color: #e4e7ed;
        z-index: 1;
    }

    // 调整内容顶部留白高度
    /deep/ .el-tabs__header {
        height: 60px;
    }

    // 调整激活栏选项框高度
    /deep/ .el-tabs__active-bar {
        bottom: 5px;
        //height: 3px;
    }

    /deep/ .el-tabs__item {
        height: 50px;
        line-height: 50px;
        font-weight: 600;
    }

    .list-left {
        width: 860px;

        /deep/ .el-tabs__content {
            height: auto;
            //background-color: #d2d3d4;
        }
    }

    .el-pagination {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 50px;
    }

    .list-right {
        margin-left: 50px;

        .search-by-date {
            //padding: 6px 0;
            display: flex;
            height: 50px;
            align-items: center;
            justify-content: flex-end;
            font-size: 14px;
            margin-bottom: 25px;

            p {
                white-space: nowrap;
                position: relative;
                //right: -30px;
            }

            .el-date-editor.el-input {
                width: 160px;
            }

            /deep/ .el-input__inner {
                width: 160px;
                height: 30px;
                line-height: 30px;
            }

            /deep/ .el-input__prefix,
            /deep/ .el-input__suffix {
                top: -4px;
            }

            ///deep/ .el-input__suffix{
            //  right: 50px;
            //}
        }

        /deep/ .el-card__body {
            padding-top: 0;
        }
    }
}

// 去掉双重分割线
/deep/ .el-tabs__nav-wrap::after {
    content: none;
}

.box-card {
    width: 480px;
}
</style>


<style lang = "less">
@hover_color: #3370ff;
.my-autocomplete {
    li {
        line-height: normal;
        padding: 7px;

        .name {
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .desc {
            font-size: 12px;
            color: #b4b4b4;
        }

        &.highlighted {
            background: #edf6ff !important;
        }

        .highlighted .addr {
            color: #ddd;
        }
    }

    a {
        color: rgba(0, 0, 0, 1);
        //transition: color .3s;
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    a:hover {
        color: @hover_color;
    }
}

.el-autocomplete-suggestion li:hover {
    background-color: #edf6ff !important;
}
</style>