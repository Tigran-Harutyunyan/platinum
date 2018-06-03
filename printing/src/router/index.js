import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';
import Products from '../components/Products/Products.vue'
import ProductDetails from '../components/ProductDetails/ProductDetails.vue'
import Cart from '../components/Cart/Cart.vue'
import SignUp from '../components/SignUp/SignUp.vue'
import Orders from '../components/Orders/Orders.vue'
import Home from '../components/Home/Home.vue'
import Shopping from '../components/Shopping/Shopping.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
Vue.use(Router);

const shouldBeAuthed = async(to, from, next) => {
    let authorized = store.state.storage.user ? true : false;
    if (authorized) {
        next();
    } else {
        next('/category/1');
    }
};

const router = new Router({
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
                    component: Cart,
                    beforeEnter: shouldBeAuthed
                },
                {
                    path: '/SignUp',
                    name: 'SignUp',
                    component: SignUp
                },
                {
                    path: '/orders',
                    name: 'Orders',
                    component: Orders,
                    beforeEnter: shouldBeAuthed
                }

            ]
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/design',
            name: 'Design',
            component: Portfolio
        },
        { path: '*', redirect: '/home' }
    ]
});
let jqueryElement = $('html, body');
router.beforeEach(function(to, from, next) {
    if (to.name != "Home") {
        setTimeout(() => {
            //window.scrollTo(0, 0);
            jqueryElement.animate({
                scrollTop: 0
            }, 200);
        }, 100);
    }
    next();
});
export default router;