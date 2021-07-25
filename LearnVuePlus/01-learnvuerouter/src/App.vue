<template>
  <div id="app">
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
                          <!--replace用于阻止返回-->
    <!--<router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace>关于</router-link>-->
    <!--<button @click="homeClick" >首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->


    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/' + userId" replace>用户界面</router-link>
    <!--<router-link to="/profile" replace>档案</router-link>-->
    <!--<router-link :to="{path: '/profile', query: {name: '建军桑',age: 18}}" replace>档案</router-link>-->
    <button @click="btnClick">档案</button>
    <!--用于占位-->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: '张三'
    }
  },
  methods: {
    homeClick() {
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.push('/about')
    },
    btnClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: '建军桑',
          age: 203,
          height: 188
        }
      })
    }
  }
}
</script>

<style>
  .active{
    color: #4d74ff;
  }

</style>
