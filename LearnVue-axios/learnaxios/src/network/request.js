import axios from 'axios'

export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

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

  // 3. 发送真正的网络请求，返回Promise
  return instance(config)
}
// export function request(config) {
//   // 1. 创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       console.log(err);
//       failure(res)
//     })
// }

// export function request(config,success,failure) {
//   // 1. 创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config)
//     .then(res => {
//       console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       console.log(err);
//       failure(res)
//     })
// }

