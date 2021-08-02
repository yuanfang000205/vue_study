<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad"/>
      </a>
    </swiper-item>
  </swiper>
  
</template>

<script>
  import Swiper from "../../../components/common/swiper/Swiper";
  import SwiperItem from "../../../components/common/swiper/SwiperItem";
  export default {
    name: "HomeSwiper",
    components: {SwiperItem, Swiper},
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    methods: {
      imgLoad() {
        if (!this.isLoad){
          this.$emit('swiperImgLoad')
        }
        this.isLoad = true
      }
    }
  }
</script>

<style scoped>

</style>
