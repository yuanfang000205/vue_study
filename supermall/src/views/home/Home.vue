<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['新款','流行','精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 v-show="isTabFixed" class="tab-control"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @upLoad="upLoadMore">

      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <home-recommend :recommends="recommends"/>
      <home-feature/>
      <tab-control :titles="['新款','流行','精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  /* 当前项目各个模块业务处理组件 */
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeature from "./childComps/HomeFeature";

  /* 当前项目业务处理组件 */
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  /* 公共业务处理组件 */
  import NavBar from 'components/common/navbar/NavBar';
  import Scroll from "components/common/scroll/Scroll";

  /* 网络请求方法 */
  import {getHomeMultidata,getHomeGoods} from "network/home";

  /* 工具方法 */
  import {itemListenerMixin,backListenerMixin} from "common/mixins";

  export default {
    name: "Home",
    components: {
      Scroll,
      GoodsList,
      NavBar,
      TabControl,
      HomeFeature,
      HomeRecommend,
      HomeSwiper,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop':{page: 0,list: []},
          'new':{page: 0,list: []},
          'sell':{page: 0,list: []},
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    mixins: [itemListenerMixin,backListenerMixin],
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,1)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 1.保存Y值
      this.saveY = this.$refs.scroll.getScrollY()
      // console.log(this.saveY)
      // 2.取消全局事件监听
      this.$bus.$off('imageLoad',this.itemListenerMixin)
    },
    created() {
      // 1. 请求多个数据
      this.getHomeMultidata();

      // 2. 请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      contentScroll(position){
        this.listenShowBackTop(position)

        //  判断TabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      upLoadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImgLoad() {
        //获取tabControl的offsetTop
        // 每个组件都有一个属性$el：用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /**
       *网络请求方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          // console.log(res.data.list);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          // 完成上拉加载后
          this.$refs.scroll.finishPullUp()

        })
      }
    }

  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;

    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
  .content {
    overflow: hidden;
    position: absolute;

    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }


</style>
