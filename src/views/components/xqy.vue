<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">
                <router-link tag="div" to="/"> <img class="imz1" src="@/assets/imgz/imz1.jpg" alt="">



                </router-link>
                <h1>博客标题</h1>


                <p>zz</p>


                <ul>
                    <router-link tag="li" to="/">首页</router-link>
                    <router-link tag="li" to="/about">登录</router-link>
                    <router-link tag="li" to="/about">注册</router-link>

                </ul>
            </el-aside>
            <el-main>

                <div class="header">


                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="'/home'">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>

                    </el-breadcrumb>
                </div>

                <div class="contene">

                    <p> <span>作者: clearlove</span> <span> 发布日期 {{listz.date}}</span> <span> 浏览量:200</span> </p>

                    <div class="titele">
                        <h4>文章标题:{{listz.title}}</h4>
                        <p> 文章内容:{{listz.jj}}</p>
                    </div>

                    <div class="rate">您对此文章的评价:
                        <!-- <span class="demonstration">区分颜色</span> -->
                        <el-rate show-text v-model="value2" :colors="colors">
                        </el-rate>
                    </div>

                    <p class="pmbn">
                        <el-button type="warning"><i class="el-icon-share" color="withe"></i>分享点赞</el-button>
                        <el-button type="success" @click="open"><i class="el-icon-star-off"></i>打赏</el-button>
                    </p>


                    <div class="talk">

                        <h2> 说点什么</h2>
                        <div class="nc">
                            <p> 昵称:</p>
                            <el-input width="200px" placeholder="您的昵称"></el-input>
                        </div>
                        <div class="nc">
                            <p> 邮箱:</p>
                            <el-input width="200px" placeholder="您的常用邮箱"></el-input>
                        </div>
                        <div class="nc">
                            <p> 链接:</p>
                            <el-input width="200px" placeholder="您的网站链接"></el-input>
                        </div>
                        <div class="nc">
                            <p> 内容:</p>
                            <el-input type="textarea" :rows="2" placeholder="说点啥吧,要不我都不知道您来过" v-model="textarea">
                            </el-input>
                        </div>
                          <el-row> <el-button type="primary" plain>提交</el-button></el-row>
                    </div>

                </div>
            </el-main>

        </el-container>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions,
        mapGetters
    } from "vuex"
    export default {
        props: {

        },
        data() {
            return {

                listz: [],
                value1: null,
                value2: null,
                colors: ['#99A9BF', '#F7BA2A',
                    '#FF9900'] // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
            };
        },
        computed: {
            ...mapState({

                list: "list",








            })

        },
        created() {
            console.log(this.$route.params.id)

            var idz = this.$route.params.id

            var sz = this.list.filter(ele => ele.id == idz)
            console.log(sz[0])
            this.listz = sz[0]
            console.log(this.listz)

        },
        mounted() {

        },
        watch: {

        },
        methods: {
            open() {
        this.$alert('摇就完了', '打赏支持', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      
    }

        },
        components: {

        },
    };
</script>

<style scoped lang="scss">
    .home {
        height: 100%;
        width: 100%;

    }

    .imz1 {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin: 25px auto;
    }

    .bannertt {
        display: block;
        height: 100%;
        width: 100%;
    }

    h1 {
        color: white;
        margin: 20px auto;

    }

    h3 {
        font-weight: normal;
        font-size: 18px;
        color: #666;

    }

    .el-aside {
        text-align: center;
        height: 100%;
        background-color: #4ec6c8;

        ul {
            margin: 30px auto;
            width: 60%;
        }

        p {
            color: white
        }

        li {
            color: white;
            border-bottom: 1px dashed #d1f1e9;
            padding: 10px 0;
            list-style: none;
        }
    }

    .el-container {
        height: 100%;
    }

    .header {
        background-color: #f2f2f2;
        padding: 10px;
    }

    .contene {
        padding: 25px 0;
        min-height: 450px;
        text-align: left;
    }

    .titele {
        margin: 20px auto;

        p {
            margin: 15px auto;

        }
    }

    .pmbn {

        text-align: center;
    }

    .talk {

        margin-top: 20px;
    }

    .nc {
        display: flex;
        align-items: center;
        margin: 15px auto;

        p {
            width: 40px;
        }
    }
    .is-plain{
        margin-left: 40px;
    }
</style>