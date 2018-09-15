// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue' //Use App.vue if the templates and scripts are separated.
// ATTENTION. Forgetting .vue extension next to App will cause "Failed to mount component: template or render function not defined" error
import router from './router'
import store from './store/index';
import {
  EventBus
} from './event-bus.js';
import Vuelidate from 'vuelidate';
import VueI18n from 'vue-i18n';
import messages from './locales';
Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueI18n);

let token = localStorage.getItem('token') ? localStorage.getItem("token") : '';
if (token.length) {
  store.dispatch('setToken', token);
}

let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : {};
if (Object.keys(user).length > 0) {
  store.dispatch('setUser', user);
}


let locale = localStorage.getItem('locale') ? localStorage.getItem("locale") : 'en';

store.dispatch('setLocale', locale);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: locale, // set locale
  messages, // set locale messages
});
Object.defineProperty(Vue.prototype, '$locale', {
  get: function () {
    return App.i18n.locale
  },
  set: function (locale) {
    App.i18n.locale = locale
  }
})


new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: {
    App
  },
  template: '<App/>'
})
