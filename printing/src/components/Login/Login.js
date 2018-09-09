import {
  required,
  minLength,
  email,
  sameAs
} from 'vuelidate/lib/validators';
import {
  EventBus
} from '../../event-bus.js';
export default {
  data() {
    return {
      email: "tigran@mailinator.com",
      password: "tigran",
      loading: false
    }
  },
  computed: {
    isAllowedToRequest() {
      return !this.$v.email.$invalid && !this.$v.password.$invalid && !this.loading;
    }
  },
  methods: {
    onLogin() {
      if (this.isAllowedToRequest) {
        this.loading = true;
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        }).then((response) => {
          this.loading = false;
          if (response.error) {
            this.$notify({
              title: 'Login',
              message: response.message ? response.message : 'Failed to login',
              position: "top-right",
              type: "error"
            });
          }
          if (response.success) {
            this.$emit('LoginSuccess',response)
            let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
            storage.user = response;
            this.user = response;
            localStorage.setItem('platinumInk', JSON.stringify(storage));
            this.$store.dispatch('setStorage', storage);
            this.showLoginDropdown = false;
            this.loginMode = true;
            this.isAuthenticated = true;
          }
          EventBus.$emit('authChanged');
        }).catch((error) => {
          this.loading = false;
          this.$notify({
            title: 'Login',
            message: error ? error : 'Failed to login',
            position: "top-right",
            type: "error"
          });
        });
      }
    }
  },
  validations: {
    email: {
      required,
      email
    }, 
    password: {
      required
    }
  }
}
