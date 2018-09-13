import {
  EventBus
} from '../../event-bus.js';
import Login from '../Login/Login.vue';
import Search from '../Search/Search.vue';
import Hamburger from './Hamburger/Hamburger.vue'; 
import LanguageSwitcher  from './LanguageSwitcher/LanguageSwitcher.vue';
export default { 
  data() {
    return { 
      loading: false, 
      recoveryMail: "",
      isAuthenticated: false, 
      user: {},
      currentRoute: "", 
      showLogin: false,
      showPasswordRecovery: false
    }
  },
  components:{
    Login,
    Search,
    Hamburger, 
    LanguageSwitcher
  },
  watch: {
    '$route' (to, from) {
      this.currentRoute = to.name;
    }
  },
  computed:{
    storage(){
      return this.$store.getters.storage;
    },
    cartItems: {
      get: function () {
        return this.$store.getters.getCartItems;
      },
      set: function () {}
    },
  },
  methods: {
    logout() {
      this.checkAuth();
      if (this.user) {
        let formData = new FormData();
        formData.append('token', this.user ? this.user.token : "");
        this.$store.dispatch('logout', {
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
      if(this.$route.name !== 'Home',this.$route.name !== 'ProductDetail'){
        this.$router.push({
          name: 'Categories',
          params: {
            id: 1
          }
        });
      } 
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
      let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
      if (locale != storage.locale) {
        storage.locale = locale;
        localStorage.setItem('platinumInk', JSON.stringify(storage));
        this.$store.dispatch('setStorage', storage);
        location.reload();
      }
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
       this.user = this.storage.user ? this.storage.user : null;
    }
  },
  mounted() { 
    this.user = this.storage.user;
    this.isAuthenticated = this.storage.user;
    this.currentRoute = this.$route.name;
    EventBus.$on('logout', () => {
      this.removeUser();
    });
  } 
}
