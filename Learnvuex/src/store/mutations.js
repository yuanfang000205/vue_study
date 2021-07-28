export default  {
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
    state.info.name = 'aaa'
    // 非响应式
    // state.info['address'] = '深圳'
    //响应式
    // Vue.set(state.info,'address','深圳')
    // delete非响应式
    // Vue.delete(state.info,'age')

  }
}
