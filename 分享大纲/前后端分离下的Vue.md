# 前置知识

* ECMAScript6/7
* Node.js / npm
* CSS 预处理器
* Webpack
* Charles 解决开发环境下的跨域问题



# 准备工作

在进行正式开发时，需要安装必备环境和程序

## 安装 Node.js

Node.js 有很多种安装方式，其中 Windows 版本的安装和 MacOS 安装包方式安装最为简单

### 如果你是 Windows 操作系统

访问[官方网站](https://nodejs.org/zh-cn/)首页下载最新 LTS 版本或者发布版均可

### 如果你是 Linux 操作系统

可以下载二进制包进行安装，详细教程见 [how-to-install-nodejs-via-binary-archive-on-linux](https://github.com/nodejs/help/wiki/Installation#how-to-install-nodejs-via-binary-archive-on-linux)

### 如果你是 Unix/MacOS 操作系统

可以进行源码编译安装，详细教程见 [building Node.js on supported platforms](https://github.com/nodejs/node/blob/master/BUILDING.md#building-nodejs-on-supported-platforms)

MacOS 除了可以源码编译安装，也可以直接下载 `.pkg` 安装包进行安装，或者在 `homebrew` 包管理工具中直接进行安装

### 推荐使用 `nvm` 进行 Node.js 的安装

如果是非 Windows 操作系统，推荐使用 `nvm` 它是专门管理 Node.js 版本的管理软件，可以安装多个版本的 Node.js 并且可以随时切换，Windows 平台貌似也有，下面介绍如何安装 `nvm`：

第一步：执行如下命令

```base
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

或者

``` bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

第二步：执行如下命令

``` base
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

第三部：测试 `nvm` 是否安装成功

``` 
command -v nvm
```

`nvm` 常用命令

```
nvm ls-remote # 列出所有可以安装的 node.js 版本
nvm install # 安装某个 node.js 版本
nvm use # 使用某个 node.js 版本
```

举例，使用 `nvm` 安装 `v13.12.0` 版本的 node.js

```
# 第一步，安装 v13.12.0 版本的 node.js
nvm install v13.12.0
# 第二步，使用已经安装好的 v13.12.0 版本
nvm use v13.12.0
```

## 关于 npm 镜像源

`npm` 是 Node.js 的包管理工具，作用类似于 `.deb` 之于 Debian 和 Ubuntu 也类似 `.rpm` 之于 Redhat 和 CentOS

因为众所周知不可描述的原因，不做任何设置使用 `npm` 安装 Node.js 软件包经常会遇到下载不成功或者下载时间过长导致超时的各种安装问题

解决办法大致有两种：

* 科学上网（推荐）
* 使用淘宝的镜像源

下面介绍两种使用淘宝镜像源的方法

#1 直接设置，执行如下命令：

``` bash
npm config set registry https://registry.npm.taobao.org
```

#2 使用淘宝定制过的 `cnpm` 替代默认的 `npm`

执行如下命令：

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

或者通过添加 `npm` 参数的别名生成一个新命令：

```bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"

# Or alias it in .bashrc or .zshrc
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://npm.taobao.org/dist \
  --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc
```

### 关于在 Windows 下使用 Node.js

-



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

![Vue 单文件组件](https://github.com/rbackrock/learn-vue-framework/blob/master/screenshots/vue-component-with-preprocessors.png)



# Vue 官方脚手架

通过官方脚手架快速搭建前后端分离下的 Vue 项目，通过 Todolist 示例演示配合路由，状态管理的完整 DEMO 

## 安装脚手架

```bash
npm install -g @vue/cli
```



## 目录结构

介绍各目录作用以及如何进行组件化前端开发

## 前端路由

* 什么是前端路由以及为什么需要前端路由
* 介绍什么是 vue-route 以及简单使用

## 状态管理

* 什么是状态管理以及为什么需要状态管理
* 介绍什么是 vuex 以及简单使用