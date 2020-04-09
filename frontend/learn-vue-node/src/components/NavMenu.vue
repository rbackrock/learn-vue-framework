<template>
  <el-menu
    :default-active="activeIndex"
    router
    style="height: 100%;"
  >
    <el-menu-item index="home">
      <i class="el-icon-setting"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="todo">
      <i class="el-icon-setting"></i>
      <span slot="title">待办列表</span>
    </el-menu-item>
    <el-menu-item index="about">
      <i class="el-icon-setting"></i>
      <span slot="title">关于</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  mounted() {
    this.$data.activeIndex = this.$route.name;
  },
  data() {
    return {
      activeIndex: 'home'
    }
  }
}
</script>