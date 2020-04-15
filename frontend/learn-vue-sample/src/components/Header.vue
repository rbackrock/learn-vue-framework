<template>
  <div class="container">
    <h3><span>{{ headerText }}</span><span> - </span><span>共有{{ todoListTotal }}个待办列表</span></h3>
  </div>
</template>

<script>
export default {
  computed: {
    headerText() {
      return this.$store.state.headerText
    },
    todoListTotal() {
      return this.$store.state.todoListTotal
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    padding 30px 0
    text-align center
</style>