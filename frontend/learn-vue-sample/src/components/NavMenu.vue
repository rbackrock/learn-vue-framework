<template>
  <ul class="container">
    <li class="item">
      <router-link :to="{path: 'todo'}">代办列表</router-link>
    </li>
    <li class="item">
      <router-link :to="{path: 'about'}">关于</router-link>
    </li>
  </ul>
</template>

<style lang="stylus" scoped>
  .container
    border-right 1px solid #ccc

    .item 
      padding: 20px 0
      text-align center
      cursor pointer
</style>