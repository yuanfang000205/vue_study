<template>
  <div id="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="title"><span>{{goods.title}}</span></div>
    <div class="price">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discountDesc}}</span>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span class="services-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
  </div>
  </div>

</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .title {
    color: #222;
    font-size: 18px;
    margin-top: 10px;
  }
  .price {
    margin-top: 10px;
  }
  .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }
  .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }
  .columns {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .services {
    display: flex;
    justify-content: space-between;
    /*line-height: 60px;*/
    margin-top: 10px;
  }
  .services-item img {
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
  }
  .services-item span {
    font-size: 13px;
    color: #333;
  }

</style>
