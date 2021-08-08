import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop";
import {BACK_POSITION} from "./const";


export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh,50)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    // 监听item中图片加载完成
    this.$bus.$on('imageLoad',this.itemImgListener)
  },
}
export const backListenerMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0,0,500);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > BACK_POSITION
    }
  }
}
