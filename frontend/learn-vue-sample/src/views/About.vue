<template>
  <div>
    <h3>关于页面</h3>
    <button @click="handleChange">演示 Vuex 我要变标题</button>
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