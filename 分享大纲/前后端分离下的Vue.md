# 预备知识

* ECMAScript6/7
* Node.js / npm
* CSS 预处理器
* 构建/打包工具
* ~~Charles 解决开发环境下的跨域问题~~
* 通过 Vue CLI 脚手架提供的针对集成的  [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 进行配置解决开发环境下的跨域问题

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

MacOS 除了可以源码编译安装，也可以直接下载 `.pkg` 安装包进行安装，或者在 `homebrew` 包管理工具中进行安装

### 推荐使用 `nvm` 进行 Node.js 的安装

如果是非 Windows 操作系统， `nvm`它是专门管理 Node.js 版本的管理软件，可以安装多个版本的 Node.js 并且可以随时切换，Windows 平台貌似也有，下面介绍如何安装 `nvm`：

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

## 解决跨域

假设后端的 API 接口是这样的：`http://localhost:8080/api/todoList`

假设 Vue 项目跑起来的请求地址是这样的：`http://localhost:8081/`

在项目根目录创建一个名为 `vue.config.js` 的 js 文件添加如下配置：

```javascript
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true
      }
    }
  }
}
```

更为完整的详细配置请参考 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#proxycontext-config) 



# Node.js 项目简要介绍

首先，新建一个文件夹 `note-project` 作为项目目录，在该目录下执行以下命令：

``` bash
npm init # 项目初始化
```

该命令执行会有几个关键信息需要开发者填写和选择，如下：

``` bash
package name # 包名
version # 版本号
description # 项目描述
entry point # 项目入口文件
test command # 测试命令
git repository # git 项目源
keywords # 项目关键字
author # 作者
license # 项目开源许可证类型
```

填写完信息以后会再根目录生成 `package.json` 文件，这个文件描述了项目的基本信息，其中还有执行命令，项目使用的 Node.js 包等重要信息，每个 Node.js 项目都一定会有该文件

## 使用 npm 安装包

* 全局安装

``` bash
npm i -g 
```

* 安装在 `devDependencies`

``` bash
npm i -D
```

* 安装在 `dependencies`

``` bash
npm i -S
```



# Vue 官方脚手架

通过官方脚手架快速搭建前后端分离下的 Vue 项目，通过 Todolist 示例演示配合路由，状态管理的完整 DEMO 

## 安装脚手架 CLI

```bash
# 安装脚手架 CLI
npm install -g @vue/cli
# 测试脚手架 CLI 是否安装成功
vue --version
```

## 使用官方脚手架生成项目

例如，现在要生成一个名为 `learn-vue-cli` 的项目，执行如下命令：

``` bash
vue create learn-vue-cli
```

> 如果你在 Windows 上通过 minTTY 使用 Git Bash，交互提示符并不工作。你必须通过 `winpty vue.cmd create hello-world` 启动这个命令。不过，如果你仍想使用 `vue create hello-world`，则可以通过在 `~/.bashrc` 文件中添加以下行来为命令添加别名。 `alias vue='winpty vue.cmd'` 你需要重新启动 Git Bash 终端会话以使更新后的 bashrc 文件生效

执行创建命令以后，会有两种设置

![preset](https://cli.vuejs.org/cli-new-project.png)

`defautl` 安装 `babel` 和 `eslint`

Manually select features 则手动选择进行安装，其中有

![Manually select features](https://cli.vuejs.org/cli-select-features.png)

```bash
Babel # 这是转译插件，常用于把 ECMAScript6/7 转化成 ECMAScript5 
TypeScript # 微软推出视为 JavaScript 的超集语言，可以弥补 JavaScript 的不少缺陷
Progressive Web App (PWD) Support # 为应用的 PWA 添加支持，PWA 是渐进式增强 Web 应用，其目的是在移动端提供的标准化框架，努力在网页应用中提供和原生用户将近的用户体验，使用它需要 HTTPS
Router # Vue 官方推出的前端路由插件
Vuex # Vue 官方推出的状态管理插件
CSS Pre-processors # CSS 预处理器
Linter / Formatter # 代码风格格式效验器
Unit Testing # 单元测试框架
E2E Testing # E2E 的单元测试框架
```

按需选择就可以，为了展示这次分享的核心内容，这里我们选择 `Babel` ，`Router` ，`Vuex` ，`CSS Pre-processors`

选择完成以后，还会有几项提示需要设置，如下：

```bash
# 是否使用 history 模式的风格，如果使用这种风格，你的地址栏应该类似这个样子 localhost:8000/about 但是还有另一种路由模式是哈希模式，它看上去像这个样子 localhost:8000/#/about
Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
```

```bash
# 如果你选择使用 CSS 预处理器，会让你选择以下几种
Sass/SCSS (with dart-sass)
Sass/SCSS (with node-sass)
Less
Stylus
```

```bash
# 这是询问类似 babel 或者 eslint 的配置文件放哪里，有两种选择，一种是独立出来在特定文件里设置，另一种是直接在 package.json 里进行设置，这里推荐独立出来，选择 In dedicated config files
Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
In dedicated config files
In package.json
```

```bash
# 如果以后创建的项目就用以上所有配置的话就选择 y 否则 n
Save this as a preset for future projects? (y/N)
```



另外，官方脚手架也提供图形化界面来进行创建，输入如下命令即可：

``` bash
vue ui
```

## 使用脚手架

开发环境下，输入如下命令：

``` bash
npm run serve
```

完整的开发环境下命令如下：

```bash
vue-cli-service serve [options] [entry]

选项：
    --open    在服务器启动时打开浏览器
    --copy    在服务器启动时将 URL 复制到剪切版
    --mode    指定环境模式 (默认值：development)
    --host    指定 host (默认值：0.0.0.0)
    --port    指定 port (默认值：8080)
    --https   使用 https (默认值：false)
```

生成环境下部署，命令如下：

```bash
npm run build
```

完整的生成环境下的命令如下：

```bash
vue-cli-service build [options] [entry|pattern]

选项：
    --mode        指定环境模式 (默认值：production)
    --dest        指定输出目录 (默认值：dist)
    --modern      面向现代浏览器带自动回退地构建应用
    --target      app | lib | wc | wc-async (默认值：app)
    --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
    --no-clean    在构建项目之前不清除目标目录
    --report      生成 report.html 以帮助分析包内容
    --report-json 生成 report.json 以帮助分析包内容
    --watch       监听文件变化
```

利用 Vue 脚手架生成好的项目关键文件及目录解释：

```
.
├── /node_modules # Node.js 项目需要的包都下载在这里
│
├── /public # Vue 需要的 HTML 模板和例如网站图标都放在这里
│
├── /src # 源代码文件放这里
│   │
│   ├── /assets # 项目需要的静态资源放这里，比如图片 Logo 什么的
│   │
│   ├── /components # 抽离出可以复用的 .vue 组件放这里
│   │
│   ├── /router # 项目路由相关的 js 文件放这里
│   │
│   ├── /store # 项目状态相关的 js 文件放这里
│   │
│   ├── /viesw # 作为页面的 .vue 组件放这里
│   │
│   ├── App.vue # 页面的主入口
│   │
│   └── main.js # 项目的主入口，整个项目从这里开始
│ 
├── .browserslistrc # 浏览器的支持度配置
│ 
└── package.json # Node.js 整个项目的描述和配置的文件
.
```





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

![Vue 单文件组件](https://cn.vuejs.org/images/vue-component.png)



## 前端路由

* 什么是前端路由以及为什么需要前端路由

如果使用 Vue 脚手架生成的项目代码，本质是单页应用，单页应用需要前端路由

* 介绍什么是 vue-route 以及简单使用

代码示例



## 状态管理

中大型项目再多个组件中经常遇到需要同时使用一个状态的情况，为了不破坏单向数据流的简洁性而加入了状态管理

### 什么是状态管理以及为什么需要状态管理

应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏

#1 多个视图依赖于同一状态

#2 来自不同视图的行为需要变更同一状态

![vuex](https://vuex.vuejs.org/flow.png)



![vueX](https://vuex.vuejs.org/vuex.png)

### 介绍什么是 Vuex 以及简单使用

Vuex 有五个核心概念

* State 
* Getter
* Mutation
* Action
* Module

