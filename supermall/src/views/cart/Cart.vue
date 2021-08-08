<template>
  <div class="cart">
    <!--导航栏-->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!--商品列表-->
    <cart-list />
    <!--底部工具栏-->
    <cart-bottom-bar />
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import {mapGetters} from 'vuex'
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";
  export default {
    name: "Cart",
    components: {CartBottomBar, CartList, NavBar},
    computed: {
      ...mapGetters(['cartLength', 'cartList'])
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .cart-nav {
    background-color: var(--color-high-text);
    color: #ffffff;
  }

</style>
