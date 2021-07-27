import  Vue from 'vue'
import  Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    //方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state,payload) {
      // state.counter += count
      state.counter += payload.count
    },
    addStudent(state,stu){
      state.students.push(stu)
    },
    updateInfo(state) {
      // state.info.name = 'aaa'
      // 非响应式
      // state.info['address'] = '深圳'
      //响应式
      // Vue.set(state.info,'address','深圳')
      // delete非响应式
      Vue.delete(state.info,'age')

    }
  },
  actions: {},
  //当state中数据需要进行某种变化时使用
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state,getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return age => {return state.students.filter(s => s.age > age) }
    }
  },
  modules: {}
})

//3.导出store独享
export default store;
