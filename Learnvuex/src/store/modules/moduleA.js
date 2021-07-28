export default  {
  state: {
    name: '梦醉孤新丶'
  },
  mutations: {
    updateName(state, payload) {
      // state.name = ' 小兔崽子'
      state.name = payload
    }
  },
  actions: {
    AsyncUpdateName(context,payload){
      setTimeout(() => {
        context.commit('updateName','小兔崽子')
      },1000)
    }
  },
  getters: {
    getFullName(state) {
      return state.name + '1111'
    },
    getNewName(state,getters) {
      return getters.getFullName + '2222'
    },
    getName(state,getters,rootState) {
      return getters.getNewName + rootState.counter
    }
  }
}
