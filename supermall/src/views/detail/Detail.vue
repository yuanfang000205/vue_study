<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
   <scroll class="content" ref="scroll">
     <detail-swiper :top-images="topImages"/>
     <detail-base-info :goods="goods"/>
     <detail-shop-info :shop-info="shopInfo"/>
     <details-info :details-info="detailsInfo" @imageLoad="imageLoad"/>
     <detail-params-info :params-info="paramsInfo"/>
   </scroll>
  </div>

</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";

  import {getDetails,Goods,Shop} from "network/detail";
  import Scroll from "components/common/scroll/Scroll";
  import DetailsInfo from "./childComps/DetailsInfo";
  import DetailParamsInfo from "./childComps/DetailParamsInfo";

  export default {
    name: "Detail",
    components: {
      DetailParamsInfo,
      DetailsInfo,
      Scroll,
      DetailShopInfo,
      DetailBaseInfo,
      DetailSwiper,
      DetailNavBar
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shopInfo: {},
        detailsInfo: {},
        paramsInfo: {},
        comments: {}
      }
    },
    created() {
      // 1. 保存传入的iid
      this.iid = this.$route.params.iid

      // 2. 根据iid请求详情数据
      this.getDetail(this.iid)

      // 3. 发送


    },
    methods: {
      getDetail() {
        getDetails(this.iid).then(res => {
          console.log(res);
          const data = res.result
          // 1.获取顶部轮播图
          this.topImages = data.itemInfo.topImages

          // 2.获取商品信息
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

          // 3.获取商家信息
          this.shopInfo = new Shop(data.shopInfo)

          // 4.保存商品的详情数据
          this.detailsInfo = data.detailInfo

          // 5.获取商品参数信息
          this.paramsInfo = data.itemParams
        })
      },
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
