<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" class="detail-nav"/>
   <scroll class="content" ref="scroll" :probe-type="3" @scroll="detailScroll">
     <detail-swiper :top-images="topImages"/>
     <detail-base-info :goods="goods"/>
     <detail-shop-info :shop-info="shopInfo"/>
     <details-info :details-info="detailsInfo" @imageLoad="imageLoad"/>
     <detail-params-info ref="params" :params-info="paramsInfo"/>
     <detail-comments-info ref="comments" :comments-info="commentsInfo"/>
     <goods-list ref="recommends" :goods="recommends"/>
   </scroll>
    <detail-bottom-bar />
  </div>

</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailsInfo from "./childComps/DetailsInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import DetailParamsInfo from "./childComps/DetailParamsInfo";
  import DetailCommentsInfo from "./childComps/DetailCommentsInfo";

  import {getDetails,Goods,Shop,getRecommend} from "network/detail";
  import {debounce} from "common/utils";
  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";
  import {itemListenerMixin} from "common/mixins";


  export default {
    name: "Detail",
    components: {
      DetailBottomBar,
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
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    mounted(){

    },
    created() {
      // 1. 保存传入的iid
      this.iid = this.$route.params.iid

      // 2. 根据iid请求详情数据
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
        // 1.第一次获取，值不对
        // 值不对的原因：this.$refs.params.$el压根没有渲染
        // this.themeTopYs = []
        //
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)

        // console.log(this.themeTopYs);

        // this.$nextTick(() => {
        //   // 2.第二次获取：值不对
        //   // 值不对的原因：图片没有计算在类
        //   // 根据最新的数据，对应的DOM时已经被渲染出来
        //   // 但是图片依然时没有加载完(目前获取到的offsetTop不包含其中的图片)
        //   // offsetTop值不对的时候都是因为图片的问题
        //   this.themeTopYs = []
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        //   console.log(this.themeTopYs);
        //
        // })
      })

      // 3. 发送推荐请求
      getRecommend(this.iid).then(res => {
        this.recommends = res.data.list
      })

      // 4. 给getThemeTopY赋值，(对给this.themeTopYs赋值的操作进行防抖)
      this.getThemeTopY = debounce(() => {
        this.$nextTick(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
          this.themeTopYs.push(Number.MAX_VALUE)

          // console.log(Number.MAX_VALUE);

        })
      })
    },
    destroyed() {
      this.$bus.$off('imageLoad',this.itemImgListener)
    },
    methods: {
      imageLoad() {
        // this.newRefresh()
        // console.log('...');
        this.$refs.scroll.refresh()
        this.getThemeTopY()

      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      detailScroll(position) {
        // 获取y值
        const positionY = -position.y
        // themeTopYs：[a,b,c,d]
        // 第一种情况
        // a <= positionY < b ,index:0
        // b <= positionY < c ,index:1
        // c <= positionY < d ,index:2
        // 第二种情况
        // positionY >= d ,index:3
        let length = this.themeTopYs.length
        for (let i = 0; i < length; i++) {
          if (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }

          // if(this.currentIndex !== i && (i < length -1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) ||
          //   (i === length -1 && positionY >= this.themeTopYs[i])) {
          //   this.currentIndex = i;
          //   this.$refs.nav.currentIndex = this.currentIndex
          // }
        }
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
    position: absolute;
    top: 44px;
    bottom: 58px;
    left: 0;
    right: 0;
  }
</style>
