<template>
  <div id="app">
    <h2>---------modules里的内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改姓名</button>
    <button @click="AsyncUpdateName">异步修改姓名</button>
    <h2>{{$store.getters.getFullName}}</h2>
    <h2>{{$store.getters.getNewName}}</h2>
    <h2>{{$store.getters.getName}}</h2>

    <h2>---------------App内容---------</h2>
    <h2>{{$store.state.counter}}</h2>

    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>---------------getters相关内容之counter平方---------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>

    <h2>---------------getters相关内容之students中age大于20---------</h2>
    <h2>{{$store.getters.more20stu}}</h2>

    <h2>---------------getters相关内容之students中age大于20人数---------</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>

    <h2>---------------getters相关内容之students中age大于指定age---------</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>

    <h2>---------------HelloVuex内容---------</h2>
    <hello-vuex></hello-vuex>
    <h2>{{$store.state.info}}</h2>

  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return{
        message: '我是组件内容'
      }
    },
    methods: {
      addition() {
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        //PayLoad负载
        //1.普通的封装提交
        // this.$store.commit('incrementCount',count)

        //2.特殊的封装提交
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      addStudent() {
        const stu = {id: 105, name: '建军桑', age: 22}
        this.$store.commit('addStudent',stu)
      },
      updateInfo() {
        // this.$store.commit
        // this.$store.dispatch('aUpdateInfo',{
        //   message: '我是携带的信息',
        //   success: () => {
        //   console.log('信息修改成功！');
        // }
        // })
        this.$store
          .dispatch('aUpdateInfo','我是携带的信息')
          .then(res => {
            console.log('里面完成了提交');
            console.log(res);
          })


      },
      updateName() {
        this.$store.commit('updateName','小兔崽子')
      },
      AsyncUpdateName() {
        this.$store.dispatch('AsyncUpdateName','小兔崽子')

      }
    }
}
</script>

<style>
</style>
