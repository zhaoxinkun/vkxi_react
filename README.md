# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used
  in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for
more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check
out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information
on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# DevLog

## Part 1. 项目配置搭建



1. 使用Vite 搭建项目的目录结构
2. **使用react-dom** 配置了项目的基础路由 ,路由的配置在src/router里
   1. routes.jsx 配置了项目的路由路径
   2. config.jsx 配置了项目的路由组件
   3. 最后在App.jsx 中引入了路由配置
3. 配置了项目的基础样式,文件全部都在src/css里
4. **使用Antd** 作为项目的UI库(现在自带按需引入与树摇)
5. 使用Antd 搭建layout,存放于src/laytou目录
   1. Sider 侧边栏(遍历数据)
   2. layout 主要区域
      1. Header 头部区域(折叠块,用户退出)
      2. Content 主要区域(使用outlet完成路由出口,渲染home页)
6. **使用axios** 做项目的请求封装
   1. axios.js 是对于axios的封装(基本地址,请求拦截器,响应拦截器)
   2. http.js 是对于axios 的RESTFul的方式的封装
   3. api.js 是对于基本的所有的请求的实现
7. **创建utils** 
   1. token.js 是做了token的存取操作

## Part 2. 项目页面实现



1. **login** 文件夹
   1. 完成login 页面实现
   2. 使用form 表单(校验,默认值,login请求,存token)
2. **pages** 文件夹
   1. **完成home** 页面
      1. 侧边栏
      2. 头部导航(logOut请求)
      3. 轮播图(antd 的Carousel实现)
      4. echarts 组件搭建
