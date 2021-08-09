export default {
  addCart(context,payload) {
    return new Promise((resolve, reject) => {
      // 1.查找之前数组中是否含有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // 2.判断oldProduct
      if (oldProduct){
        context.commit('addCartCount',oldProduct)
        resolve('商品的数量+1')
      } else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('添加了新的商品')
      }
    })
  }
}
