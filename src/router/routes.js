import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'
import Wishlist from '../views/Wishlist.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name:'Prdoucts', component: Products },
    { path: '/product/:name', name:'Prdouct', component: Product },
    { path: '/wishlist', name:'Wishlist', component: Wishlist }
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
}
})