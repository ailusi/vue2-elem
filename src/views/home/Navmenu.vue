<template>
  <div>
    <div class="toggle-button" @click="toggleCollapse">|||</div>
    <el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff" :unique-opened="true" :collapse="isCollapse" :collapse-transition="false" router :default-active="path">
      <!-- 一级菜单 -->
      <el-submenu :index="item.id + ''" v-for="item in meunlist" :key="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.authName }}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item :index="subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState(subItem.path)">
          <i class="el-icon-menu"></i>
          <span>{{ subItem.authName }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['navCollapse'],
  data() {
    return {
      meunlist: [],
      isCollapse: false,
      // 被激活的链接地址
      path: ''
    }
  },
  created() {
    this.getMenuList()
    this.path = window.sessionStorage.getItem('path')
  },
  methods: {
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.meunlist = res.data
    },
    toggleCollapse() {
      this.navCollapse(this.isCollapse)
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(path) {
      window.sessionStorage.setItem('path', path)
      this.path = path
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
