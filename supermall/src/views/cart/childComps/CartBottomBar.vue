<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"
                    :is-checked="isSelectAll" @click.native="checkClick">
      </check-button>
      <span>全选</span>
    </div>
    <div class="price">合计: ¥{{totalPrice}}</div>
    <div class="calculate">去计算({{totalCount}})</div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import { mapGetters } from 'vuex'

	export default {
		name: "CartBottomBar",
    components: {
		  CheckButton
    },
    computed: {
      ...mapGetters([
      	'cartList',
      ]),
		  totalPrice() {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      totalCount() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.cartList.length === 0) return false
        // 1.使用filter过滤器
        // return !(this.cartList.filter(item => !item.checked).length)

        // 2.使用find函数
        // return !this.cartList.find(item => !item.checked)

        // 3.使用普通循环
        for (let item of this.cartList) {
          if (!item.checked) {
            return false
          }
        }
        return true
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          //全部选中
          this.cartList.forEach(item => item.checked = false)
        }else {
          //全部未选中或部分未选中
          this.cartList.forEach(item => item.checked = true)

        }
      }
    }
	}
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    position: relative;

    height: 44px;
    line-height: 40px;

    background-color: #eee;

    font-size: 16px;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }

  .check-button {
    width: 22px;
    height: 22px;
    line-height: 20px;
    margin-left: 5px;
  }

  .price {
    margin-left: 20px;
    flex: 1;
    line-height: 44px;
  }

  .calculate {
    width: 80px;
    float: right;
    background-color: red;
    color: white;
    text-align: center;
  }
</style>
