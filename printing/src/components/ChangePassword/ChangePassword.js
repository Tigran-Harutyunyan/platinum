import { EventBus } from '../../event-bus.js';
import VueRecaptcha from 'vue-recaptcha';
import {
  required,
  minLength,
  sameAs
} from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      recaptcha: "",
      recaptchaResponse: "",
      oldPassword: "",
      password: "",
      passwordConfirm: "",
      isLoading: false
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid && this.agree && this.recaptchaResponse.length;
    },
    storage() {
      return this.$store.getters.getStorage;
    }
  },
  methods: {
    changePassword() {
      if (!this.isLoading && !this.$v.$invalid) {
        this.isLoading = true;
        this.$store.dispatch('changePassword', { 
          old_password: this.old_password,
          password: this.password, 
          recaptcha: this.recaptchaResponse
        }).then((response) => {
          this.isLoading = false;
          if (response.error) {
            if (response.message == "Invalid Recaptcha") {
              this.$refs.recaptcha.reset();
            } else {
              this.$notify({
                title: 'Sign up',
                message: response.message ? response.message : 'Failed to sign up',
                position: "top-right",
                type: "error"
              });
            }
          } else {
            this.$notify({
              title: 'Sign up',
              message: 'Signup success! Please log in',
              position: "bottom-right",
              type: "success"
            });
            this.$router.push({
              name: 'Categories',
              params: {
                id: 1
              }
            })
          }
        }).catch((error) => {
          this.isLoading = false
        });
      }
    },
    onVerify(response) {
      this.recaptchaResponse = response
    },
    onExpired() {
      this.$refs.recaptcha.reset();
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset();
    }
  },
  mounted() {
    if (this.storage && this.storage.user) {
      this.token = this.storage.user.token;
    }
    EventBus.$on('onLogout', () => {
      this.$router.push({ name: 'Categories', params: { id: 1 } });
  });
  },
  components: {
    VueRecaptcha
  },
  validations: {
    old_password: {
      required
    },
    password: {
      minLength: minLength(6)
    },
    passwordConfirm: {
      sameAsPassword: sameAs('password')
    }
  }
}
