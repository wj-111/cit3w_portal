<template>
    <div class="title-search">
        <div class="page">
            <div class="news-banner">
                <div class="banner-title">
                    <h2>新视野</h2>
                    <h3>了解更多新闻</h3>
                </div>
                <el-autocomplete class="search-news" popper-class="my-autocomplete" highlight-first-item v-model="searchNews" clearable
                                 ref="autocomplete" @focus="autocompleteFlag=true" @blur="autocompleteFlag=false" @clear="searchHandle"
                                 :fetch-suggestions="querySearchAsync" placeholder="请输入新闻关键词" :trigger-on-focus="false">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    <template slot-scope="{ item }">
                        <router-link to="/">
                            <div class="name" v-html="item.newsTitle"></div>
                        </router-link>
                    </template>
                </el-autocomplete>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TitleSearch",
    data() {
        return {
            searchNews: '',
            msg: "这是新闻页",
            autocompleteFlag: false,
            // 关键词搜索新闻
            searchList: []
        };
    },
    methods: {
        // 关键词搜索新闻
        async querySearchAsync(queryString, cb) {
            this.searchList = []
            let res = await this.$http.get('/article/fuzzySearch?pageNum=1&pageSize=14&search=' + queryString)
            if (res.status !== 200) {
            } else {
                // this.$message.success('获取成功')
                const record = res.data.data.records
                for (const iterator of record) {
                    let tempData = {}
                    tempData.newsTitle = iterator.articleTitle
                    this.searchList.push(tempData)
                }
            }
            const newHtml = `<span style="color: #3370ff">${queryString}</span>`
            this.searchList.forEach(item => {
                item.newsTitle = item.newsTitle.replace(queryString, newHtml)
            })
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                console.log(this.searchList)
                cb(this.searchList)
            }, 1000 * Math.random())
        },
        // 解决 clearable 搜索框后再次输入不显示下拉
        searchHandle() {
            if (this.autocompleteFlag) this.$refs.autocomplete.activated = true
        },
    }

}
</script>


<style lang="less" scoped>
@hover_color: #3370ff;
* {
    margin: 0;
    padding: 0;
}

// 下拉列表样式
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

.page {
    padding-top: 60px;
}

.news-banner {
    width: 100%;
    height: 280px;
    background: url("../../assets/img/news/newsbanner.jpg") 50% no-repeat;
    background-size: cover;
    text-align: center;
    padding-top: 70px;

    .banner-title {
        padding-bottom: 30px;

        h2 {
            font-size: 40px;
            line-height: 60px;
            font-weight: 600;
        }

        h3 {
            color: #828282;
            margin-top: 5px;
            font-size: 100%;
            font-weight: 400;
            font-variant: normal;
        }
    }

    .search-news {
        width: 46%;

        .el-input__icon {
            line-height: 46px;
            font-size: 16px;
        }
    }

    /deep/ .el-input__inner {
        height: 46px;
        line-height: 46px;
        border-radius: 30px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }
}
</style>
