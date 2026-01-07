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



1. **main.jsx**
   1. main.jsx 项目的入口文件,主要就是声明路由的模式以及渲染承载单页面组件的App组件
   2. main.css 样式文件
2. **App.jsx** 
   1. 单页面应用的承载组件,记得把React的“路由注册表”放这里哦,不然无法使用路由
   2. App.css 样式文件
3. **router 文件夹**
   1. router.jsx 文件所有的路由数据,包括你的路径,name,以及渲染的组件
   2. config.jsx 遍历路由数据,然后生成“路由注册表”的函数
4. **layout文件夹**
   1. Header.jsx 头部组件
   2. Main.jsx 内容区组件
   3. SiderBar.jsx 侧边栏组件
   4. Index.jsx 整合布局组件
   5. main.css 样式文件
5. **login** 文件夹
   1. 完成login 页面实现

   2. 使用form 表单(校验,默认值,login请求,存token)

   3. login.css 样式文件
6. **pages** 文件夹
   1. **完成home** 页面
      1. 侧边栏
      2. 头部导航(logOut请求)
      3. 轮播图(antd 的Carousel实现)
   2. **Dashoard 文件夹 echarts 组件搭建**
      1. 这个是最主要的了,我们需要按需加载 utils/echarts.js
      2. 然后我们创建一个通用的创建图表的壳子components/echarts/index
      3. 再然后就是创建一个图表组件的配置文件,通过props传递数据Dashorad/Echarts/config.js
      4. 单个的图表组件Dashorad/Echarts/echartsCom
      5. 组件的配置数据Dashorad/Echarts/options
   3. **Course 文件夹**
      1. 实现课程管理页面
      2. 使用了form组件,modal组件,Pagination组件
   4. 
