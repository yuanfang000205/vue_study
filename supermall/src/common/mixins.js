import {debounce} from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.homeScroll.refresh,50)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    // 监听item中图片加载完成
    this.$bus.$on('imageLoad',this.itemImgListener)
  },
}
