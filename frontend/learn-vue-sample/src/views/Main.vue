<template>
  <div class="main-container">
    <div class="header-container">
      <Header></Header>
    </div>
    <div class="content-container">
      <div class="aside">
        <NavMenu />
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
    NavMenu
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-container
    .header-container
      height 30%

    .content-container
      display flex

      .aside
        flex 1
      
      .main
        flex 6
        padding 20px
</style>