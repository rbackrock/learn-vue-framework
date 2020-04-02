# Vue 介绍

### 什么是 Vue

能够与现代化的工具链以及各种支持类库结合使用的渐进式视图层框架

### 为什么要使用 Vue

* 开发效率
* 可维护性
* 组件化



# Vue 基础

介绍和演示 Vue 框架的基础使用功能

## 安装/引用

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




### 数据驱动视图

代码演示