<template>
  <div>
    <h2>我是Profile</h2>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created(){
      console.log('Profile created');
    },
    destroyed(){
      console.log('Profile destroyed');
    }
  }
</script>

<style scoped>

</style>
