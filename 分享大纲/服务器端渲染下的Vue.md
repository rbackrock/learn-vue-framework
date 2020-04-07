# 后端项目结构和组成

* SpringBoot 2.2.6
* MySQL 5.7
* Thymeleaf



# 准备工作

* 数据库是否连通
* 后端项目是否正常启动

* 接口调试工具 postman 的简单使用



# 接口格式约定

约定一个完整的 JSON 对象包含三个部分，一个是 code 一个是 msg 一个是 data 根据实际情况可以响应体中不必须包含着三个部分

* code - 代表和业务有关系的响应值，例如，0 表示操作成功，1 表示操作错误，10 表示需要登录 3 代表非法参数等
* msg - 代表接口中需要显示的提示信息
* data - 代表接口中响应的数据

响应的数据示例

```javascript
{
  "status": 1,
  "msg": "密码错误"
}

{
  "status": 0,
  "data": {
    "id": 1,
    "username": "lee",
    "email": "ccc@ccc.com"
  }
}

{
  "status": 0,
  "msg": "操作成功"
}
```



# ElementUI 介绍

饿了么主导设计开发的一套针对 Vue 的桌面端 UI 组件库



# 项目演示

服务器端渲染下 Vue 作为前端，ElementUI 作为组件库的完整增删改查



# 我想再聊一下 Thymeleaf

从前端开发的角度，我想聊一下为什么我推荐使用 Thymeleaf 作为模板引擎

* 不启动后端项目，页面一样可以打开
* 表达式在指令中编写
* 可以对 JavaScript 进行预处理