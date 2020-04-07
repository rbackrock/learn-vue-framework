# 前置知识

* ECMAScript6/7
* Node.js / npm
* CSS 预处理器
* Webpack
* 介绍 Charles 抓包工具解决开发环境下的跨域问题



# Vue 单文件组件

前后端分离的项目最佳实践是使用 Vue 单位件组件配合现代前端开发的工具链来进行开发

## 什么是 Vue 单文件组件

以文件扩展名为  `.vue` 的文件来进行组件开发的方式叫作单文件组件，通常它还需要现代前端构建工具进行配合例如 `Webpack` 和 `Browserify` 等

## 为什么要用单文件组件

不使用单文件组件有以下缺点：

* 全局定义 (Global definitions) 强制要求每个 component 中的命名不得重复
* 字符串模板 (String templates) 缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 \
* 不支持 CSS (No CSS support) 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏
* 没有构建步骤 (No build step) 限制只能使用 HTML 和 ES5 JavaScript，而不能使用预处理器，如Pug(formerly Jade) 和 Babel

## 单文件组件的基本结构

![Vue 单文件组件](https://cn.vuejs.org/images/vue-component-with-preprocessors.png)



# Vue 官方脚手架

通过官方脚手架快速搭建前后端分离下的 Vue 项目，通过 Todolist 示例演示配合路由，状态管理的完整 DEMO 

## 目录结构

介绍各目录作用以及如何进行组件化前端开发

## 前端路由

* 什么是前端路由以及为什么需要前端路由
* 介绍什么是 vue-route 以及简单使用

## 状态管理

* 什么是状态管理以及为什么需要状态管理
* 介绍什么是 vuex 以及简单使用