<template>
  <div class="home">
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
            <div class="logo"></div>
            <el-menu
                :router="true"
                :unique-opened="true"
                :collapse="isCollapse"
                class="el-menu-admin"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu :index="item.path" v-for="item of this.$store.state.menus" :key="item.id">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{ item.authName }}</span>
                </template>
                <el-menu-item :index="menus.path" v-for="menus in item.children" :key="menus.id">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ menus.authName }}</span>
                </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <!-- header部分 -->
            <el-header>
              <i class="myicon myicon-menu toggle-btn" @click="toggleCollapse"></i>
              <div class="system-title">电商后台管理系统</div>
              <div>
                <span class="welcome">
                    您好，xxx
                  </span>
                <el-button type="text" @click="logout">退出</el-button>
              </div>
            </el-header>
            <!-- 中间内容部分 -->
            <el-main>
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </el-main>
        </el-container>
      </el-container>
  </div>
</template>
<script>
  // import { getmenus } from '@/api'
  import { getmenus } from '@/api/api.js'
export default {
  name: 'Home',
  data(){
    return {
      isCollapse: false,
      // menus: []
    }
  },
  created(){
    // getmenus().then(res=>{
    //   // console.log(res)
    //   this.menus = res.data.data
    // })
  },
  methods:{
    handleOpen (key, keyPath) {
        console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
        console.log(key, keyPath)
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    logout() {
      this.$router.push('/')  
    },
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height:60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: #989898;
  }
  .toggle-btn {
    font-size: 36px;
    color: #989898;
    cursor: pointer;
    line-height: 60px;
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .logout-btn {
    color: orange;
  }
}
</style>