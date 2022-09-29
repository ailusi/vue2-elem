<template>
  <div>
    <el-container class="home-cantainer">
      <!-- 头部区域 -->
      <el-header>
        <div>
          <img class="logo" src="../../assets/logo.png" alt="" />
          <span>电商后台管理系统</span>
          <el-button class="loginout" type="info" @click="logout">退出</el-button>
        </div>
      </el-header>
      <!-- 页面主体 -->
      <el-container>
        <!-- 侧边栏 -->

        <el-aside :width="isCollapse ? '200px' : '64px'">
          <Nav :navCollapse="getCollapse" />
        </el-aside>

        <!-- 右侧内容主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './Navmenu.vue'
export default {
  // 注册组件
  components: {
    Nav
  },
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    getCollapse(data) {
      this.isCollapse = data
    },
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home-cantainer {
  height: 100vh;
}
.el-header {
  background-color: #373d4e;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  > div {
    display: flex;
    align-items: center;
  }
  .logo {
    height: 100%;
  }
  span {
    margin-left: 15px;
    align-items: center;
    color: #fff;
    font-size: 20px;
  }
  .loginout {
    position: relative;
    left: 950px;
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #eaedf1;
}
</style>
