<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(table,index1) in paramsInfo.rule.tables"
           :key="index1" >
      <tr v-for="(tr,index2) in table" :key="index2">
        <td v-for="(td,index3) in tr" :key="index3">{{td}}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(item, index) in paramsInfo.info.set">
        <td class="info-param-key">{{item.key}}</td>
        <td class="param-value">{{item.value}}</td>
      </tr>
    </table>

    <!--<div class="info-img" v-if="paramsInfo.image.length !== 0">-->
      <!--<img :src="paramsInfo.image" alt="">-->
    <!--</div>-->
  </div>
  
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      paramsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .params-info table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
  }
  .params-info table tr {
    height: 42px;
  }

  .params-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>
