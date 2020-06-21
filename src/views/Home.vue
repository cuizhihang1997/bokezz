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
          <router-link tag="li" to="/login">登录</router-link>
          <router-link tag="li" to="/register">注册</router-link>

        </ul>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="16" router>
            <div class="grid-content bg-purple-dark el-carousel">
              <el-carousel :interval="4000" type="card" width="300px" height="300px">
                <el-carousel-item  v-for="item in imgz" :key="item">
                  <!-- <h3 class="medium">{{ item }}</h3>  -->
                  <!-- <img class="imz2"  :src="item" alt="">                                     -->
                  <!-- <div style="color: #000000;text-align: center;overflow: hidden;width: 100%;"> -->
                  <img class="bannertt"  :src="item">
                  <!-- </div> -->
                  <!-- {{item}}} -->
                </el-carousel-item>
              </el-carousel>

            </div>
            <div class="grid-content bg-purple-dark left">


              <h2>最新文章</h2>



              <ul v-if="isulshow" class="listz">


                <li class="wzjj"  v-for="item in list" :key="item.id">

                 
                    <router-link tag="h3" :to="'/home/xqy/'+item.id">{{item.title}}</router-link>
                   
                    <p class="info"> <i class="el-icon-time" ></i><span>{{item.date}} </span> <i class="el-icon-document"></i>

                    <span class="tags"> 0 </span>
                     <span class="tags"> 1 </span>
                      <span class="tags"> 2 </span>
                   </p>

                   <p class="desc">{{item.jj}}</p>

                   

                </li>



              </ul>

              <el-pagination background layout="prev, pager, next"   :pager-count="7" :total="100" @current-change="add();log()">
              </el-pagination>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-dark right">
             <div class="re-row">

             <p class="hy">下午好,欢迎来到博客</p>
             </div>
             <div class="re-row">
             <el-input  class="synr" v-model="zzm" placeholder="请输入要搜索的关键字"></el-input>
             <el-button    icon="el-icon-search">搜索</el-button>

             </div>

             <div class="re-row">
             
             <h2 class="hzmm">热门文章</h2> 
                   

                   <ul class="host-list">

                     <li class="host-title" v-for="item in list" :key="item.id">


                        <p>{{item.title}}</p> 
                     </li>

                   </ul>

             </div>
             <div class="re-row">
             <h2 class="hzmm">热门标签</h2>
       

       <span class="spmm" v-for="item in listzj" :key="item.dz" :style= "{color: item.ys}"> {{item.dz}} </span>
             </div>


            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapGetters,
    mapActions
  } from "vuex";
import  Mock from "mockjs"

  export default {
    props: {

    },
    data() {
      return {
        zzm:"",

       isulshow:true,
     
      //  list:this.$store.state.list
  
   
     















      };
    },
    computed: {
      ...mapState({
        imgz: "imgz",
         listzj:"listzj",

        list: "list"

      })
    },
    created() {
      //  this.add();
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        //  jz(){
          
        //      this.isulshow=false
        //      this.isulshow=true
             
        //  }

         ...mapMutations({


           jz:"jz",
           add:"add"
         }),
         log(){
           console.log(this.list)
         },
  //         add() { 
  //     console.log("nmb");
  //     console.log(this.list);

  //     // cons
  // var Random = Mock.Random;
      
  //     this.list=[];
      
  //     for(var i = 0 ; i < 10 ; i++){
  //     var obj = {
  //         id : Random.id(),
  //         // img : Random.dataImage("200x100"),
  //         title : Random.ctitle(),
  //         // ischecked:false,
  //         // sl: Random.natural(2, 9),
  //         // dj: Random.natural(15, 30),
  //         // gwcz:0,
  //         jj: Random.cparagraph(),
  //         date:Random.date()
          
  //     }
  //     this.list.push(obj)
  // }},

    },
    components: {

    },
  };
</script>



<style scoped lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;

  }

  // .el-carousel__item:nth-child(2n) {
  //   background-color: #99a9bf;
  //   // background: url()
  // }

  // .el-carousel__item:nth-child(2n+1) {
  //   background-color: #d3dce6;
  // }

  .imz1 {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 25px auto;
  }

  .bannertt {
    display: block;
    height: 300px;
    width: 300px;
  }

  h1 {
    color: white;
    margin: 20px auto;

  }
  h3{
    font-weight:normal;font-size:18px;
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

  .home {
    height: 100%;
    width: 100%;

  }

  .left {
    text-align: left;
  }
  .listz{
    list-style: none;
       

  }
  .wzjj{
     border-bottom: 1px dotted #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .info{
    color: #999;
  }
  .hy{
    font-weight: 700;
    font-size: 16px;
  }
  .right{
    text-align: left;
    margin-left: 15px;
  }
  .synr{
     width: 250px;

  }
  .re-row{
    margin-bottom: 28px
  }
  .el-input{
 margin-right: 15px;
  }
  .hzmm{
        font-weight: 400;
    font-size: 18px;
    margin-bottom: 15px;
    position: relative;
    padding-left: 15px
  }
  .hzmm::before{
        content: "";
    width: 4px;
    height: 18px;
    display: block;
    background-color: #4ec6c8;
    position: absolute;
    top: 0;
    left: 0;
  }
  .host-list{
    list-style: none
  }
  .spmm{
        margin: 0 10px 10px 0;
    display: inline-block;
  }
</style>