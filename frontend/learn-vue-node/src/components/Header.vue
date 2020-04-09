<template>
  <h1 class="header-text">{{ headerText }}</h1>
</template>

<script>
export default {
  computed: {
    headerText() {
      return this.$store.state.headerText
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-text {
    text-align: center;
  }
</style>