import {
  required,
  minLength,
  email,
  sameAs
} from 'vuelidate/lib/validators';
import {
  EventBus
} from '../../event-bus.js';
import Preloader from '../../commonComponents/Preloader/Preloader.vue';
export default {
  data() {
    return {
      email: "tigran@mailinator.com",
      password: "tigran",
      isLoading: false,
      dialogTableVisible: true,
      recoveryMail:'',
      loginMode: true
    }
  },
  computed: {
    isAllowedToRequest() {
      return !this.$v.email.$invalid && !this.$v.password.$invalid && !this.isLoading;
    }
  },
  components: {
    Preloader
  },
  methods: {
    onLogin() {
      if (this.isAllowedToRequest) {
        this.isLoading = true;
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        }).then((response) => {
          this.isLoading = false;
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
            localStorage.setItem('platinumInk', JSON.stringify(storage));
            this.$store.dispatch('setStorage', storage);  
            this.close();
          }
          EventBus.$emit('authChanged');
        }).catch((error) => {
          this.isLoading = false;
          this.$notify({
            title: 'Login',
            message: error ? error : 'Failed to login',
            position: "top-right",
            type: "error"
          });
        });
      }
    },
    onPassRecovery() {
      if (!this.$v.recoveryMail.$invalid) {
        this.$store.dispatch('recover', {
          email: this.recoveryMail
        }).then((response) => {
          this.isLoading = false;
          if (response.success) {
            this.$notify({
              title: 'Password recovery',
              message:  "Password recovery success",
              position: "top-right",
              type: "success"
            });
          }
        }).catch((error) => {
          this.isLoading = false;
        });
      }
    },
    close(){
      this.$emit("close");
      this.dialogTableVisible = false;
    }
  },
  validations: {
    email: {
      required,
      email
    }, 
    password: {
      required
    },
    recoveryMail: {
      required,
      email
    }
  }
}
