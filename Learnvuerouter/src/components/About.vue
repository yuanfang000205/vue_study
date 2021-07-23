<template>
  <div>
    <h2>我是About</h2>
    <p>我是内容</p>
  </div>
</template>

<script>
  export default {
    name: "About",
    created(){
      console.log('About created');
    },
    destroyed(){
      console.log('About destroyed');
    }
  }
</script>

<style scoped>

</style>
