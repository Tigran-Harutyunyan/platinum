import Vue from 'vue'
import Router from 'vue-router'
import Products from '../components/Products/Products.vue'
import ProductDetails from '../components/ProductDetails/ProductDetails.vue'
import Cart from '../components/Cart/Cart.vue'
import SignUp from '../components/SignUp/SignUp.vue'
import Orders from '../components/Orders/Orders.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetails
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    }   
  ]
})
