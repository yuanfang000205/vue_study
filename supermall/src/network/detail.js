import {request} from "./request";

export function getDetails(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.scores = shopInfo.score
  }
}
