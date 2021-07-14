const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2008-6',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2008-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2008-6',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    // getFinalPrice(price){
    //   return '￥' + price.toFixed(2)
    // }
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    remove(index){
      this.books.splice(index,1)
    }
  },
  computed: {
    totalPrice(){
      let totalPrice = 0;
      for (let i in this.books){
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
    }
  },
  filters: {
    showPrice(price){
      return '￥' + price.toFixed(2)
    }
  }
})