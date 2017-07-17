import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import Header from '../components/header/header.vue';
import Goods from '../components/goods/goods.vue';
import Ratings from '../components/ratings/ratings.vue';
import Seller from '../components/seller/seller.vue';

import '../common/stylus/index.styl';

Vue.use(Router);
Vue.use(VueResource);
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        content: Goods
      }
    },
    {
      path: '/goods',
      components: {
        header: Header,
        content: Goods
      }
    },
    {
      path: '/ratings',
      components: {
        header: Header,
        content: Ratings
      }
    },
    {
      path: '/seller',
      components: {
        header: Header,
        content: Seller
      }
    }

  ]
});
