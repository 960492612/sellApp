<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0"
      @click.stop.prevent="deceaseCart($event)">
        <!--基本样式要与过渡样式分开-->
          <span class="inner inner_rotate icon-remove_circle_outline" ></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart($event)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';//  添加原对象不存在的属性，vue.set()
  export default {
    props: {
        food: {
            type: Object
        },
        eventHub: {
            type: Object
        }
    },
    methods: {
        addCart(event) {
           if (!event._constructed) {
               return;
           }
           if (!this.food.count) {
               Vue.set(this.food, 'count', 1);
           } else {
               this.food.count++;
           }
          this.eventHub.$emit('cart.add', event.target);
      },
      deceaseCart() {
        if (!event._constructed) {
          return;
        }
        this.food.count--;
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.cartcontrol
  font-size: 0
  .cart-decrease
    display: inline-block
    padding: 6px
    transform: translate3D(0, 0, 0)
    .inner
      font-size: 24px
      line-height: 24px
      color: rgb(0, 160, 220)
      transform: rotate(0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.4s linear
    &.move-enter, &.move-leave-to
      opacity: 0
      transform: translate3D(24px, 0, 0)
      .inner_rotate
        transform: rotate(180deg)
  .cart-count
    display: inline-block
    vertical-align: top
    width: 12px
    padding-top: 6px
    line-height: 24px
    text-align: center
    font-size: 10px
    color: rgb(147, 153, 159)
  .cart-add
    display: inline-block
    padding: 6px
    font-size: 24px
    line-height: 24px
    color: rgb(0, 160, 220)
</style>
