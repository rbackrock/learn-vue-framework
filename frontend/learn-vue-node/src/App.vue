<template>
  <div id="app">
    <el-container style="height: 100%;">
      <el-header>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6"><div class="header-text">我是 header</div></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavMenu />
        </el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'

export default {
  components: {
    NavMenu
  }
}
</script>

<style lang="scss">
  html, body, #app {
    height: 100%;
  }

  .header-text {
    text-align: center;
    padding: 20px 0;
  }
</style>
