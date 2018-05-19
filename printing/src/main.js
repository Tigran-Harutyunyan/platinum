// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue' //Use App.vue if the templates and scripts are separated.
// ATTENTION. Forgetting .vue extension next to App will cause "Failed to mount component: template or render function not defined" error
import router from './router'
import store from './store/index';
import { EventBus } from './event-bus.js';
import Vuelidate from 'vuelidate';
Vue.config.productionTip = false;
Vue.use(Vuelidate);
import VueI18n from 'vue-i18n';
import messages from './locales';
Vue.use(VueI18n);
 

// Create VueI18n instance with options
let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};  
if (typeof storage.locale == 'undefined'){
  storage.locale = 'en'
}
 
store.dispatch('setStorage', storage);
const i18n = new VueI18n({
  locale: storage.locale, // set locale
  messages, // set locale messages
})
/* eslint-disable no-new */
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
  components: { App },
  template: '<App/>'
})
