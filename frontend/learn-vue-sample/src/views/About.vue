<template>
  <div>
    <h3>关于页面</h3>
    <button @click="handleChange">演示 Vuex 我要变标题</button>
    <img src="@/assets/logo.png" alt="" style="display: block;">
    <div class="login"></div>
  </div>
</template>

<script>
import * as mutationTypes from '@/store/mutation-types'

export default {
  methods: {
    handleChange() {
      this.$store.commit(mutationTypes.CHANGE_HEADER)
    }
  }
}
</script>

<style lang="stylus">
  .login {
    width 200px
    height 200px
    background url(../assets/logo.png)
  }
</style>