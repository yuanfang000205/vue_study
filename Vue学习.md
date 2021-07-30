### 一、邂逅Vue.js
#### 1.1 认识Vue.js
* 为什么学习Vue.js
* Vue的读音
* Vue的渐进式
* Vue的特点

###### 1.轻量级框架 2.双向数据绑定 3.指令 4.组件化 5.客户端路由 6.状态管理

#### 1.2 安装Vue
* CDN引入
* 下载引入
* npm安装
#### 1.3 Vue的初体验
* Hellow Vuejs
  * mustache->体验vue响应式
* Vue列表展示
  * v-for
  * 后面给数组追加元素的时候，新的元素也可以在界面中渲染出来
* Vue计数器小案例
  * 事件监听：click->methods
#### 1.4 Vue中的MVVM

#### 1.5 创建Vue时，options可以放哪些东西
* el:

  类型：string | HTMLElement

​       作用：决定之后Vue实例会管理哪一个DOM

* data:

  类型：Object | Function（组件当中data必须是一个函数）

  作用：Vue实例对应的数据对象

* methods:

  类型：{[key：string}：Function}

  作用：定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中使用

* 生命周期函数


### 二、插值语法
* mustache语法
* v-once：不随数据的改变而改变
* v-pre：不调用Vue里data的值
* v-html：规定跳转后为html页面
* v-cloak：斗篷。可在需要延迟时添加进行数据遮挡


### 三、v-bind
#### 3.1 v-bind绑定基本属性
* v-bind:src
* :href
#### 3.2 v-bind动态绑定class
* 对象语法：返回对象{}
* 数组语法：返回数组[]
#### 3.3 v-bind动态绑定style
* 对象语法：:style="getStyle()"
* 数组语法：:style="[obj1,obj2]"

### 四、计算属性

#### 4.1 .计算属性的本质

* fullname:{set(),get()}

#### 4.2. 计算属性和methods对比

* 计算属性在多次使用时，只会调用一次
* 它是有缓存的



### 五、事件监听

#### 5.1. 事件监听的基本使用

#### 5.2. 参数问题

* btnClick：可省略小括号
* btnClick(event)
* btnClick(abc,event) -> $event

#### 5.3. 修饰符

* .stop：只进行带有改修饰符的操作
* .prevent：在提交之前可进行操作
* .enter：敲击enter时使用
* .once：只能使用一次
* .native

### 六、条件判断

#### 6.1.v-if/v-if-else/v-else

#### 6.2. v-show和v-if区别

##### v-show：屏蔽模块

##### v-if：不存在则消失

### 七、循环遍历

#### 7.1. 遍历数组

#### 7.2. 遍历对象

* value
* value ， key
* value， key，index

#### 7.3. 数组中响应式方法

### 八、v-model的使用

#### 8.1. v-model的基本使用

* v-model => v-bind:value v-on:input

#### 8.2. v-moel和radio/checkbox/select

#### 8.3. 修饰符

* lazy：lazy修饰符可以让数据在失去焦点或者回车时再更新数据
* number：可以让在输入框中的内容自动转换为数字类型
* trim：可以过滤掉内容左右两边的空格

### 九、组件化开发

#### 9.1. 认识组件化

#### 9.2. 组件的基本使用

* 1.Vue.extend();2.Vue.component();3.在Vue实例中实现

#### 9.3. 全局组件和局部组件

* 全局组件：Vue.component('组件名',template: {' '})
* 局部组件：在component中定义组件

#### 9.4.父组件和子组件

* component中的组件为子组件

#### 9.5. 注册组件的语法糖写法

* const cpn = {'组件名',template: {' '}}

#### 9.6. 模板的分类写法

* script：type="text/x-template"
* template：<template></template>

#### 9.7. 数据的存放

* 子组件不能直接访问父组件
* 子组件中有自己的data，且必须为函数
* 为什么必须是一个函数

#### 9.8. 父子组件之间的通信

* 父传子: props
* 子传父:$emit

#### 9.9.父子组件的访问

* children/refs
* parent/root

#### 9.10.slot的使用

* 基本使用：组件中添加slot标签并起名字，使用时添加slot="name"即可目的：让封装的组件更加具有扩展性，让使用者可以决定组件内部的一些内容到底展示什么
* 具名插槽
* 编译的作用域
* 作用域插槽：父组件替换标签，子组件显示内容

### 十、前端模块化

#### 10.1.为什么要使用模块化

* 简单写js代码带来的问题
* 闭包引起代码不可复用
* 实现简单的模块化
* AMD/CMD/CommonJS

#### 10.2.ES6中模块化的使用

* export
* import

### 十一、webpack

#### 11.1.什么是webpack

* webpack和gulp对比：grunt/gulp更加强调的是前端流程的自动化，模块化不是他的核心

  webpack更加强调模块化开发管理，二文件压缩合并、预处理等功能，是他附带的功能

* webpack依赖环境：webpack为了可以正常运行，必须依赖node环境，noder环境为了可以正常的执行代码，必须包含各种依赖包  npm工具(node pakages manager)

* 安装webpack

#### 11.2.webpack的起步

* webpack命令
* webpack配置：webpack.config.js/package.json(scripts)

#### 11.3.webpack的loader

* css-loader/style-loader
* less-loader/less
* url-loader/file-loader
* babel-loader

#### 11.4.webpack中配置Vue

* vue-loader

#### 11.5.webpack的plugin

* uglifyjs-webpack-plugin
* eslint-webpack-plugin
* 。。。。。。

#### 11.6.搭建本地服务器

* webpack-dev-server

#### 11.7.配置文件的分离

### 十二、Vue CLI

#### 1.1. runtime-compiler和runtime-only的区别

* ESLint到底是什么?  用于对代码的限制


* template -> ast -> render -> vdom -> 真实DOM
* render: (h) => h, -> createElement



#### 1.2. Vue CLI3

* 如何通过CLI3创建项目
* CLI3的目录结构

* 配置文件: 1.Vue UI 2.隐藏的配置文件 3.自定义vue.config.js



### 十三、Vue-Router

#### 13.1. 什么是前端路由

* 后端渲染\后端路由
* 前后端分离
* SPA\前端路由：核心是改变URL，但是页面不进行整体刷新

#### 13.2. 路由的基本配置

* 安装vue-router：npm install vue-router --save 
* （-dev开发版本）
* Vue.use -> 创建VueRouter对象 -> 挂在到Vue实例上
* 配置映射关系: 1.创建组件 2.配置映射关系 3.使用router-link(跳转)/router-view(用于占位)

#### 13.3. 细节处理

* 默认路由: redirect(重定向)
* mode: history(去掉路径中的#)
* router-link -> tag/replace/active-class

#### 13.4. 动态路由

* /user/:id
* this.$route.params.id



#### 13.5. 参数的传递

* params
* query -> URL
* URL: 
  * 协议://主机:端口/路径?查询
  * scheme://host:port/path?query#fragment

#### 13.6. 路由嵌套

* children: []

* ```
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  ```



#### 13.7. 导航守卫

 ![image.png](https://cdn.nlark.com/yuque/0/2021/png/22094093/1627033263211-f85f3afb-b2e4-453a-8d3e-311393a5d974.png)

* 全局导航守卫
* 路由独享守卫
* 组件类守卫



#### 13.8. Keep-alive

 ![image.png](https://cdn.nlark.com/yuque/0/2021/png/22094093/1627038845147-229a9582-6077-4e43-b426-4670c4428664.png)

### 十四、Promise

#### 14.1. Promise的基本使用

* 如何将异步操作放入到promise中

```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    //成功的时候调用Promise
    // resolve('Hello World')
    //失败的时候调用reject
    reject('error message')
  },1000)
}).then((data) => {
  //编写处理代码
  console.log('Hello World');
}).catch((err) => {
  console.log(err);
})
```

* (resolve, reject) => then/catch



#### 14.2. Promise的链式调用

* then()方法里继续调用函数进行异步操作
* 第一次then()成功后继续第二次then()，直至失败则调用.catch()方法

#### 14.3. Promise的all方法

```javascript
Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('result1')
      },3000)
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('result2')
      },2000)
    })
]).then(results => {
  console.log(results);
})
```

### 十五、Vuex

#### 15.1. 什么是状态管理

<h4 style="color: red">通过一个个单独的模块来对代码进行管理</h4>

#### 15.2. Vuex的基本使用

* state -> 直接修改state(错误)
* mutations -> devtools

#### 15.3. 核心概念

* state -> 单一状态树 ：必须是响应式的，当state发生改变时，Vue中的组件会自动更新
* getters -> 作用类似computed计算属性
* mutations -> 同步操作
* actions -> 异步操作(Promise)
* modules：可以编写多个模块以及state



#### 15.4. 目录组织方式

 ![image-20210730171524950](C:\Users\WE\AppData\Roaming\Typora\typora-user-images\image-20210730171524950.png)



### 十六、网络请求封装

#### 16.1. 网络请求方式的选择

略

#### 16.2. axios的基本使用

* 安装：npm install axios --save

* 调用：import axios from 'axios'

* 使用：

  ```javascript
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    // console.log(res);
    this.result = res;
  })
  ```



#### 16.3. axios的相关配置

* ```javascript
  3.使用全局配置请求
  axios.defaults.baseURL = 'http://123.207.32.32:8000';
  axios.defaults.timeout = 5000;
  axios.all([axios({
    url: '/home/multidata'
  }),axios({
    url: '/home/data',
    params: {
      type: 'sell',
      page: 5
    }
  })])
    .then(axios.spread((res1,res2) => {
      console.log(res1);
      console.log(res2);
    }))
  .then(results => {
    console.log(results);
  })
  ```



#### 16.4. axios的创建实例

* ```
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  ```

#### 16.5. axios的封装

* 封装request.js文件，导入axios，再导出函数request

#### 16.6. axios的拦截器

* ```javascript
  // 2. axios的拦截器
  // 2.1. 请求拦截要求
  instance.interceptors.request.use(config =>{
    // console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求
  
    // 2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标
  
    // 3.某些网络请求(比如登录(token)),必须携带特殊的信息
  
    return config;
  },error => {
    // console.log(error);
  });
  // 2.相应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  },error => {
    console.log(error);
  });
  ```







