<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是内容呵呵呵</p>
    <p>{{userId}}</p>
  </div>
  
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId(){
        return this.$route.params.userId;
      }
    }
  }
</script>

<style scoped>

</style>
