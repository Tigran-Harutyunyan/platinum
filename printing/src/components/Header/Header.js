import {
  EventBus
} from '../../event-bus.js';
import Login from '../Login/Login.vue';
import Search from '../Search/Search.vue';
import Hamburger from './Hamburger/Hamburger.vue';
import PasswordRecovery from '../PasswordRecovery/PasswordRecovery.vue';
export default { 
  data() {
    return {
      loginMode: true,
      loading: false,
      showLoginDropdown: false, 
      recoveryMail: "",
      isAuthenticated: false, 
       user: {},
      currentRoute: "",
      locales: [{
          localeName: 'ՀԱՅ',
          activeLocale: false,
          locale: 'am'
        },
        {
          localeName: 'ENG',
          activeLocale: false,
          locale: 'en'
        }
      ]
    }
  },
  components:{
    Login,
    Search,
    Hamburger,
    PasswordRecovery
  },
  watch: {
    '$route' (to, from) {
      this.currentRoute = to.name;
    }
  },
  methods: {
    logout() {
      this.checkAuth();
      if (this.user) {
        let formData = new FormData();
        formData.append('token', this.user ? this.user.token : "");
        this.$store.dispatch('requestLogOut', {
          formData
        }).then((response) => {
          this.removeUser();
        }).catch((error) => {
          this.removeUser();
        });
      } else {
        this.removeUser();
      }
    },

    removeUser() {
      let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
      delete storage.user;
      localStorage.setItem('platinumInk', JSON.stringify(storage));
      this.$store.dispatch('setStorage', storage);
      this.isAuthenticated = false;
      EventBus.$emit('onLogout');
      EventBus.$emit('authChanged'); 
      this.$router.push({
        name: 'Categories',
        params: {
          id: 1
        }
      });
    },

    toSignupPage() {
      this.$router.push({
        name: 'SignUp'
      });
      this.showLoginDropdown = false;
      this.loginMode = true;
    },

    hideLoginDropdown() {
      this.showLoginDropdown = false;
      this.loginMode = true
    },
 
    toggleLang(locale) {
      //this.$root._i18n.locale = locale;
      let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
      if (locale != storage.locale) {
        storage.locale = locale;
        localStorage.setItem('platinumInk', JSON.stringify(storage));
        this.$store.dispatch('setStorage', storage);
        location.reload();
      }
    },
    
    initScroller() {
    /*   var sectionsController = new ScrollMagic.Controller();
      var sceneNav = new ScrollMagic.Scene({
          triggerElement: "#section-services",
          triggerHook: 'onEnter',
          offset: 203
        })
        .addTo(sectionsController) 
        .on("enter", function (e) { 
        })
      sceneNav.setClassToggle("#top-nav", "section-services");
      sceneNav.setClassToggle("#service-boxes", "active-services"); */
    },
  
    onLoginSuccess(response) {
      let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
      storage.user = response;
      this.user = response;
      localStorage.setItem('platinumInk', JSON.stringify(storage));
      this.$store.dispatch('setStorage', storage);
      this.showLoginDropdown = false;
      this.loginMode = true;
      this.isAuthenticated = true;
    },
    checkAuth() {
      let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
      this.user = storage.user ? storage.user : null;
    }
  },
  mounted() {
    let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
    this.user = storage.user;
    this.isAuthenticated = storage.user;
    let currentLocale = storage.locale ? storage.locale : "en";
    this.locales.forEach(item => {
      item.activeLocale = item.locale == currentLocale;
    });
    //this.initScroller();
    this.currentRoute = this.$route.name;
    EventBus.$on('logout', () => {
      this.removeUser();
    });
  } 
}
