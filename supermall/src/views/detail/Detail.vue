<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
   <scroll class="content" ref="scroll">
     <detail-swiper :top-images="topImages"/>
     <detail-base-info :goods="goods"/>
     <detail-shop-info :shop-info="shopInfo"/>
     <details-info :details-info="detailsInfo" @imageLoad="imageLoad"/>
     <detail-params-info :params-info="paramsInfo"/>
     <detail-comments-info :comments-info="commentsInfo"/>
     <GoodsList :goods="recommends"/>
   </scroll>
  </div>

</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";

  import {getDetails,Goods,Shop,getRecommend} from "network/detail";
  import Scroll from "components/common/scroll/Scroll";
  import DetailsInfo from "./childComps/DetailsInfo";
  import DetailParamsInfo from "./childComps/DetailParamsInfo";
  import DetailCommentsInfo from "./childComps/DetailCommentsInfo";
  import GoodsList from "components/content/goods/GoodsList";
  import {itemListenerMixin} from "common/mixins";


  export default {
    name: "Detail",
    components: {
      GoodsList,
      DetailCommentsInfo,
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
        commentsInfo: {},
        recommends: []
      }
    },
    mounted(){

    },
    created() {
      // 1. 保存传入的iid
      this.iid = this.$route.params.iid

      // 2. 根据iid请求详情数据
      this.getDetail(this.iid)

      // 3. 发送推荐请求
      getRecommend(this.iid).then(res => {
        this.recommends = res.data.list
      })
    },
    destroyed() {
      this.$bus.$off('imageLoad',this.itemImgListener)
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
          
          // 6.获取评论信息
          if (data.rate.cRate !== 0){
            this.commentsInfo = data.rate.list[0]
          }
        })
      },
      imageLoad() {
        // this.newRefresh()
        // console.log('...');
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    background-color: #fff;
    height: calc(100% - 44px);
  }
</style>
