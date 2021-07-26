import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name:'Prdoucts', component: Products },
    { path: '/product', name:'Prdouct', component: Product }
  ]
})