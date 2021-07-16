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







