import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//1.基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res);
// })
//
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

//2.axios发送并发请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.timeout = 5000;
// axios.all([axios({
//   url: '/home/multidata'
// }),axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
// .then(results => {
//   console.log(results);
// })

// 3.使用全局配置请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.timeout = 5000;
// axios.all([axios({
//   url: '/home/multidata'
// }),axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
//   .then(axios.spread((res1,res2) => {
//     console.log(res1);
//     console.log(res2);
//   }))
// .then(results => {
//   console.log(results);
// })

// axios({
//   url: '/category'
// })

// 4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })


// 5. 封装一个request模块
import {request} from './network/request'
//
// request({
//   url: '/home/mulitdata'
// },res => {
//   console.log(res);
// },res => {
//   console.log(res);
// })
// request({
//   baseConfig: {
//
//   },
//   success: function (res) {
//
//   },
//   failure: function (res) {
//
//   }
//   }
// )


request({
  url: '/home/data'
})
  .then(res => {
    console.log(res);
  })
  .catch(res => {
    console.log(res);
    }
  )
