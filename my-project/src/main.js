import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: '',
      component: ProductList
    },
    {
      path: '/cart',
      component: Cart
    }
  ],
  mode: 'history',
});

Vue.filter('currency', (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
});

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
});
