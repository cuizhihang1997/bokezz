<template>
  <div class="about">
    <el-form  v-if="!islogin"  :model="ruleForm"   status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login form">


      <h2>用户登录</h2>
  


  <el-form-item  class="user" label="用户名" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <!-- <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item> -->
  <el-form-item label="密码" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>

  <el-checkbox label="记住密码" name="type"></el-checkbox>
  <el-form-item class="btnz" >
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->

    <router-link to="/register">还没有账号?去注册</router-link>|<router-link to="/home">返回首页</router-link>
  </el-form-item>
</el-form>
<el-card v-if="islogin"  class="box-card">  
Hi, 欢迎回来！当前状态：已登录

<router-link tag="p"  to="/home">  回到首页 </router-link>

</el-card>

  </div>
</template>


<script>
  export default {
    data() {

      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码'));
        }else {
              callback();
            }
          
        
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => { 
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        islogin:false,
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
       
      };
    },
    methods: {
      submitForm(formName,) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
           
            // console.log(to)
            this.$router.go(-1);
           localStorage.setItem("token", "zz")
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created () {
      if(localStorage.getItem("token")){
        this.islogin=true
      }
    }
  }
</script>

<style scoped lang="scss">


.about{
  height: 100%;
  width: 100%;
  .login{
    width: 400px;
    margin: 20px auto auto;
    padding: 20px;
    border: 1px solid #ddd;
    h2{
      margin: 20px auto;
    }
    .btnz{

       margin-top: 50px;
         margin-left: -40px;

       
    }
    .el-checkbox{
      margin-left: -115px;
      margin-top: 20px;
    }


  /deep/ .el-form-item__label:before{
     content: "*";
    color: #f56c6c;
    margin-right: 4px;
     }
     a{
           text-decoration: none;
    color: #666;
     }
     .el-button--primary{
        margin-right: 10px;
     }
  }
  .box-card{
    text-align: left;
  }
  }

</style>
