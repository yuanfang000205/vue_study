import  Vue from 'vue'
import  Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

//1.安装插件
Vue.use(Vuex)

//2.创建对象

const state =  {
  counter: 1000,
  students: [
    {id: 101, name: '小明', age: 23},
    {id: 110, name: '小蓝', age: 19},
    {id: 103, name: '小绿', age: 22},
    {id: 301, name: '小红', age: 18}
  ],
  info: {
    name: 'kobe',
    age: 42,
    height: 1.98
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  //当state中数据需要进行某种变化时使用
  getters,
  modules: {
    a: moduleA
  }
})


//3.导出store独享
export default store;
