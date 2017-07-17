<template>
  <div id="app" class="app">
    <router-view name="header"></router-view>
    <div class="tab border-1px">
      <div class="tab-item active">
        <router-link :to="{ path: 'goods', query: { id: '1234'}}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{ path: 'ratings', query: { id: '1234'}}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{ path: 'seller', query: { id: '1234'}}" >商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view name="content" :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import {urlParse} from './common/js/util';
export default {
  name: 'app',
  data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
      };
  },
  created() {
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      return response.json();
    }).then((json) => {
      this.seller = Object.assign({}, this.seller, json.seller);
    });
  }
};
</script>
<!--vue-loader依赖的插件有一个是对css作兼容性处理-->
<style rel="stylesheet/stylus" type="text/stylus" lang="stylus">
  @import "./common/stylus/mixin.styl"
  .app
    .tab
      display: flex
      width: 100%
      height: 40
      line-height: 40px
      border-1px(rgb(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
