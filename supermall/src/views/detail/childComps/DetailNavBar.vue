<template>
  <div id="detailNavBar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div  v-for="(item,index) in titles"
              class="title-item"
              :class="{active: currentIndex === index}"
              @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {NavBar},
    data() {
      return{
        titles: ['商品','详情','参数','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  #detailNavBar {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
  .title {
    display: flex;
    font-size: 15px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-tint);
  }
  .back {
    margin-top: 8px;
  }
</style>
