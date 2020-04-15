<template>
  <div class="container">
    <h3>登录页面</h3>
    <button @click="handleLogin">登录</button><br />
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$router.replace('/admin/todo')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    padding 0 20px
</style>