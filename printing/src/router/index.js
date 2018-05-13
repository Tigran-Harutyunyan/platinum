import Vue from 'vue'
import Router from 'vue-router'
import Products from '../components/Products/Products.vue'
import ProductDetails from '../components/ProductDetails/ProductDetails.vue'
import Cart from '../components/Cart/Cart.vue'
import SignUp from '../components/SignUp/SignUp.vue'
import Orders from '../components/Orders/Orders.vue'
import Home from '../components/Home/Home.vue'
import Shopping from '../components/Shopping/Shopping.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            name: 'Shopping',
            component: Shopping,
            children: [{
                    path: '/category/:id',
                    name: 'Categories',
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
                    path: '/SignUp',
                    name: 'SignUp',
                    component: SignUp
                },
                {
                    path: '/orders',
                    name: 'Orders',
                    component: Orders
                } 
                
            ]
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        } ,
        { path: '*', redirect: '/home' }
    ]
})