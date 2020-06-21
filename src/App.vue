<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->


  

    <!-- <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">
      
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container> -->

  <transition 
    enter-active-class="fadeIn animated"

    >
      <router-view/>
    </transition>
  </div>
</template>






<style lang="scss" >
  * {
    margin: 0;
    padding: 0;
  }



.animated{
  animation-duration: 1s!important;
}

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }


  body,
  html {

    height: 100%;
    width: 100%;
    font-size: 14px;
    font-family: Arial,Helvetica,sans-serif;


  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

 
</style>