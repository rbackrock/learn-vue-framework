# Vue 介绍

分享内容首先为基本 Vue 使用，最后通过  Todolist 经典例子来展示如何在服务器端渲染页面和前后端分离的架构下使用较为完整的 Vue 使用实例

### 什么是 Vue

能够与现代化的工具链以及各种支持类库结合使用的渐进式视图层框架

### 为什么要使用 Vue

* 组件化

* 开发效率
* 可维护性



# Vue 基础

介绍和演示 Vue 框架的基础使用功能

## 安装/引用

介绍不同开发思路下的 Vue 构建版本区别d

### 传统前端

<table style="text-align: center;">
	<thead>
  	<tr>
      <th>版本</th>
    	<th>UMD/AMD</th>
      <th>CommonJS</th>
    </tr>
  </thead>
  <tbody>
  	<tr>
      <td>开发环境-完全版</td>
    	<td>vue.js</td>
      <td>vue.common.js</td>
    </tr>
    <tr>
      <td>开发环境-运行时</td>
    	<td>vue.runtime.js</td>
      <td>vue.runtime.common.js</td>
    </tr>
    <tr>
      <td>生产环境-完全版</td>
    	<td>vue.min.js</td>
      <td>-</td>
    </tr>
    <tr>
      <td>生产环境-运行时</td>
    	<td>vue.runtime.min.js</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### 现代前端

<table style="text-align: center;">
  <thead>
    <tr>
      <th></th>
      <th>构建工具</th>
      <th>浏览器</th>
    </tr>
  </thead>
  <tbdoy>
    <tr>
      <td>开发环境-完全版</td>
    	<td>vue.esm.js</td>
      <td>vue.esm.browser.js</td>
    </tr>
    <tr>
      <td>开发环境-运行时</td>
    	<td>vue.runtime.esm.js</td>
      <td>-</td>
    </tr>
    <tr>
      <td>生产环境-完全版</td>
    	<td>-</td>
      <td>vue.esm.browser.min.js</td>
    </tr>
    <tr>
      <td>生产环境-运行时</td>
    	<td>-</td>
      <td>-</td>
    </tr>
  </tbdoy>
</table>

### 编译器和运行时区别

```javascript
// 需要编译器
new Vue({
  template: '<div>{{ hi }}</div>'
})
```

### 引入

[example1.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example1.html)

### Hello World

[example1.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example1.html)

介绍  [Vue Devtools](https://github.com/vuejs/vue-devtools#vue-devtools) 开发工具



# 基本功能

### Vue 实例

[example1.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example1.html)

### 生命周期

[example2.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example2.html)

![生命周期](https://cn.vuejs.org/images/lifecycle.png)

### 插值/指令/缩写

[example3.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example3.html)

### 计算属性/侦听器

[example4.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example4.html)

### Class/Style

[example5.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example5.html)

### 条件/循环

[example6.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example6.html)

### 事件

[example7.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example7.html)

### 表单/Axios

[example8.html](https://github.com/rbackrock/learn-vue-framework/blob/master/frontend/learn-vue/example8.html)

### 自定义组件

代码演示

