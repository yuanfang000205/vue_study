<template>
  <div id="category">
    <!--导航栏-->
    <nav-bar class="cate-nav"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories"/>
      <scroll id="tab-content">
        <div>
          <tab-control :titles="['综合','新品','销量']"/>
        </div>
      </scroll>

    </div>

  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import NavBar from "components/common/navbar/NavBar";
  import {getCategory} from "network/category";
  import TabControl from "components/content/tabControl/TabControl";
  import TabMenu from "./childComps/TabMenu";

  export default {
    name: "Category",
    components: {TabMenu, TabControl, NavBar, Scroll},
    data() {
      return {
        categories: [],
        // categoryData:
      }
    },
    created() {
      getCategory().then(res => {
        console.log(res);
        this.categories = res.data.category.list
        console.log(this.categories);
      })
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .cate-nav {
    background-color: var(--color-high-text);
    font-weight: 700;
    color: white;
  }
  #tab-content {
    height: 100%;
    flex: 1;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

</style>
