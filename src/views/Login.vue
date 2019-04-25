<template>
  <div class="login">
    <el-form ref="form" :model="form" class="container" >
      <el-form-item>
        <div class="avatar">
          <img src="../assets/avatar.jpg" alt=""> 
        </div>
      </el-form-item>
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="账户" prefix-icon="myicon myicon-user"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="密码" prefix-icon="myicon myicon-key"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="btnlogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  // import { login } from '@/api'
  import { login } from '@/api/api.js'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
     }
    },
  methods: {
    btnlogin(){
      // 1. 获取表单内容发送数据请求
      login(this.form).then(res=>{
        // console.log(res)
      // 2. 数据请求成功后跳转到首页
        // if(res.data.meta.status === 200){
        // 3.将登录成功之后返回的token存储在本地
          localStorage.setItem('token',res.token)

          // 登录成功获取权限菜单
          this.$store.dispatch('get_menus') 
          
          // this.$router.options.routes[1].children.push(...this.$store.getters.menu_routes)
          // this.$router.addRoutes(this.$router.options.routes)
          
          // this.$router.push('/')
          
        // }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
body {
  margin:0;
}
  .login {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #2f4050;
    .container {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 0px 40px 15px 40px;
      margin: 200px auto;
      background: white;
      .avatar {
        position: relative;
        left: 50%;
        width: 120px;
        height: 120px;
        margin-left: -60px;
        margin-top: -60px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 10px solid #fff;
        box-shadow: 0 1px 5px #ccc;
        overflow: hidden;
      }
      .login-btn {
        width: 100%;
      }
    }
  }
</style>