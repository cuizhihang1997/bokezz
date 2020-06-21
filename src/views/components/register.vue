<template>
    <div class="zc">

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login form">


            <h2>用户注册</h2>



            <el-form-item class="user" label="用户名" prop="passz">
                <el-input type="username" v-model="ruleForm.passz" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="user" label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item   prop="email" label="邮箱" :rules="[
      { required: false, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"> -->
    <el-form-item   prop="email" label="邮箱">
                <el-input type="email" autocomplete="off" v-model="ruleForm.email"></el-input>
            </el-form-item>

            <!-- <el-checkbox label="记住密码" name="type"></el-checkbox> -->
            <el-form-item class="btnz">
                <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->

                <router-link to="/login">已有账号?去登录</router-link>|<router-link to="/home">返回首页</router-link>
            </el-form-item>
        </el-form>


    </div>
</template>


<script>
    export default {
        data() {
            
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入密码'));
                } else {
                    callback();
                }


            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
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
            var validatePass3 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            var emailz = (rule, value, callback) => {
                console.log(value)
                var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                if (value === '') {
                    callback(new Error('请输入常用邮箱地址'));
                } else if(value !=""&&reg.test(value)==false) {
                     callback(new Error('请输入正确邮箱地址'));
                }else{
                    callback();
                }
            };

            return {
                emlzz:"",

                emlzzz:false,
                
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
        //   : ''
        },
    
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: '',
                    passz: '',
                    email:'',
                },
                rules: {
                    pass: [{
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    passz: [{
                        validator: validatePass3,
                        trigger: 'blur'
                    }],
                    checkPass: [{
                        validator: validatePass2,
                        trigger: 'blur'
                    }],
                    age: [{
                        validator: checkAge,
                        trigger: 'blur'
                    }],
                    email:[{
                      validator: emailz ,
                        trigger: 'blur'


                    }]
                },

            };
        },
        methods: {

            mmz(){
                console.log(this.dynamicValidateForm.email)
                   if(this.emlzz!=""){
                       this.emlzzz=true
                   }
                   console.log(this.emlzzz)
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');

                        // console.log(to)
                        // this.$router.go(-1);
                        //  localStorage.setItem("token", "zz")
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
        created() {
            if (localStorage.getItem("token")) {
                this.islogin = true
            }
        }
    }
</script>
<style scoped lang="scss">
    .zc {
        height: 100%;
        width: 100%;

        .login {
            width: 400px;
            margin: 20px auto auto;
            padding: 20px;
            border: 1px solid #ddd;

            h2 {
                margin: 20px auto;
            }

            .btnz {

                margin-top: 50px;
                margin-left: -40px;


            }

            .el-checkbox {
                margin-left: -115px;
                margin-top: 20px;
            }


            /deep/ .el-form-item__label:before {
                content: "*";
                color: #f56c6c;
                margin-right: 4px;
            }



            a {
                text-decoration: none;
                color: #666;
            }

            .el-button--primary {
                margin-right: 10px;
            }
        }
    }
</style>