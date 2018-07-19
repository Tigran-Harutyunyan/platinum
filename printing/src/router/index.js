import Vue from 'vue'
import Router from 'vue-router'
import {
  state
} from '../store/modules/state.js';
import Products from '../components/Products/Products.vue'
import Search from '../components/Search/Search.vue'
import ProductDetails from '../components/ProductDetails/ProductDetails.vue'
import Cart from '../components/Cart/Cart.vue'
import SignUp from '../components/SignUp/SignUp.vue'
import Profile from '../components/Profile/Profile.vue'
import ChangePassword from '../components/ChangePassword/ChangePassword.vue'
import Orders from '../components/Orders/Orders.vue'
import Home from '../components/Home/Home.vue'
import Shopping from '../components/Shopping/Shopping.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
Vue.use(Router);

const shouldBeAuthed = async (to, from, next) => {
  let authorized = state.storage.user ? true : false;
  if (authorized) {
    next();
  } else {
    next('/category/1');
  }
};

const shouldNotBeLoggedIn = async (to, from, next) => {
  let authorized = state.storage.user ? true : false;
  if (authorized) {
    next('/category/1');
  } else {
    next();
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
          component: SignUp,
          beforeEnter: shouldNotBeLoggedIn
        },
        {
          path: '/orders',
          name: 'Orders',
          component: Orders,
          beforeEnter: shouldBeAuthed
        },
        {
          path: '/search/:search_key',
          name: 'Search',
          component: Search
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
          beforeEnter: shouldBeAuthed
        },
        {
          path: '/change-password',
          name: 'changePassword',
          component: ChangePassword,
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
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
let jqueryElement = $('html, body');
router.beforeEach((to, from, next) => {
  if (to.name == 'Shopping') {
    router.push({
      name: 'Home'
    })
  }
  if (to.name != "Home") {
    setTimeout(() => {
      //window.scrollTo(0, 0);
      jqueryElement.animate({
        scrollTop: 0
      }, 0);
    }, 100);
  }
  next();
});
export default router;
