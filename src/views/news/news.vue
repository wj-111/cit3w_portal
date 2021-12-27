<template>
    <div class="news">
        <AwHeader class="news-header" ref="news-header"></AwHeader>
        <TitleSearch></TitleSearch>

        <div class="news-container">
            <NewsCard></NewsCard>

            <div class="news-list">
                <el-tabs class="list-left" v-model="pageInfo.activeName" @tab-click="handleClick">
                    <el-tab-pane :label="newsTabs[0].name" :name="newsTabs[0].id">
                        <news-list :items="newsItems.list" v-if="pageInfo.activeName===newsTabs[0].id"></news-list>
                    </el-tab-pane>
                    <el-tab-pane :label="newsTabs[1].name" :name="newsTabs[1].id">
                        <news-list :items="newsItems.list" v-if="pageInfo.activeName===newsTabs[1].id"></news-list>
                    </el-tab-pane>
                    <el-tab-pane :label="newsTabs[2].name" :name="newsTabs[2].id">
                        <news-list :items="newsItems.list" v-if="pageInfo.activeName===newsTabs[2].id"></news-list>
                    </el-tab-pane>
                    <!-- <el-pagination class="pagination" background @current-change="handleCurrentChange" :current-page.sync="pageInfo.pagenum"
                                   :page-size="pageInfo.pagesize" layout="prev, pager, next, jumper" :total="newsItems.total"
                                   :hide-on-single-page="singlePage"
                                   v-scroll-to="{ element: '.news-container',duration: 300, easing: 'ease',offset: -40  }">
                    </el-pagination> -->
                </el-tabs>
                <!-- <div class="list-right">
                    <div class="search-by-date">
                        <p>按日期搜索：</p>
                        <el-date-picker v-model="pageInfo.selectDate" type="month" placeholder="选择日期" value-format="yyyy-MM"
                                        @change="searchByDate(pageInfo.selectDate)">
                        </el-date-picker>
                    </div>
                    <hot-news></hot-news>
                </div> -->
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
export default {
    name: "news",
    components: {
        AwHeader,
        AwFooter,
        TitleSearch,
        NewsCard
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
                pagenum: 1,
                // 当前每页显示多少条数据
                pagesize: 10,
                selectDate: ''
            },
        };
    },
    methods: {
        handleClick(tab, event) {
            this.getNewsItems()
        },

        // 获取新闻
        async getNewsItems() {
            this.newsItems = {}
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
        },

    }
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

    //   .news-list {
    //     position: relative;
    //     display: flex;
    //     justify-content: space-between;
    //   }

    //   .news-list:after {
    //     content: "";
    //     position: absolute;
    //     left: 0;
    //     top: 43px;
    //     width: 100%;
    //     height: 2px;
    //     background-color: #E4E7ED;
    //     z-index: 1;
    //   }

    //   /deep/ .el-tabs__header {
    //     height: 60px;
    //   }

    //   /deep/ .el-tabs__active-bar {
    //     bottom: 5px;
    //     //height: 3px;
    //   }

    //   /deep/ .el-tabs__item {
    //     height: 50px;
    //     line-height: 50px;
    //     font-weight: 600;
    //   }

    //   .list-left {
    //     width: 860px;

    //     /deep/ .el-tabs__content {
    //       height: auto;
    //       //background-color: #d2d3d4;
    //     }
    //   }

    //   .el-pagination {
    //     display: flex;
    //     justify-content: center;
    //     margin-top: 30px;
    //     margin-bottom: 50px;
    //   }

    //   .list-right {
    //     margin-left: 50px;

    //     .search-by-date {
    //       //padding: 6px 0;
    //       display: flex;
    //       height: 50px;
    //       align-items: center;
    //       justify-content: flex-end;
    //       font-size: 14px;
    //       margin-bottom: 25px;

    //       p {
    //         white-space: nowrap;
    //         position: relative;
    //         //right: -30px;
    //       }

    //       .el-date-editor.el-input {
    //         width: 160px;
    //       }

    //       /deep/ .el-input__inner {
    //         width: 160px;
    //         height: 30px;
    //         line-height: 30px;
    //       }

    //       /deep/ .el-input__prefix, /deep/ .el-input__suffix {
    //         top: -4px;
    //       }

    //       ///deep/ .el-input__suffix{
    //       //  right: 50px;
    //       //}
    //     }

    //     /deep/ .el-card__body {
    //       padding-top: 0;
    //     }

    //   }
}
</style>
