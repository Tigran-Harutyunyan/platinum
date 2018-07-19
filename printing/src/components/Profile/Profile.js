import {
  EventBus
} from '../../event-bus.js';
import VueRecaptcha from 'vue-recaptcha';
import {
  required,
  minLength,
  email,
  sameAs
} from 'vuelidate/lib/validators';
//https://www.google.com/recaptcha/admin#site/341190406
export default {
  data() {
    return {
      recaptchaResponse: "",
      first_name: "",
      last_name: "",
      company_name: "",
      email: "",
      receive_promotions: false,
      recaptcha: '',
      isLoading: false,
      birthday_at: "",
      phone: "",
      pickerOptions1: {
        format: 'yyyy-MM-dd'
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid && this.recaptchaResponse.length>0;
    },
    storage() {
      return this.$store.getters.getStorage;
    }
  },
  methods: {
    updateProfileInfo() {
      if (!this.isLoading && !this.$v.$invalid) {
        this.isLoading = true;
        let data = {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          company_name: this.company_name,
          phone: this.phone,
          receive_promotions: this.receive_promotions ? 1 : 0,
          recaptcha: this.recaptchaResponse,
          token: this.token
        }

        if (this.birthday_at) {
          data.birthday_at = this.birthday_at
        }

        this.$store.dispatch('updateProfileInfo', data).then((response) => {
          this.isLoading = false;
          if (response.error) {
            if (response.message == "Invalid Recaptcha") {
              this.$refs.recaptcha.reset();
            } else {
              this.$notify({
                title: 'Edit profile',
                message: response.message ? response.message : 'Failed to edit the profile',
                position: "top-right",
                type: "error"
              });
            }
          } else {
            this.$notify({
              title: 'Edit profile',
              message: 'Edit profile success!',
              position: "bottom-right",
              type: "success"
            });
            let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
            storage.user = response;
            localStorage.setItem('platinumInk', JSON.stringify(storage));
            this.$store.dispatch('setStorage', storage);
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
      console.log(this.storage);
      let user = this.storage.user;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.phone = user.phone;
      this.birthday_at = user.birthday_at;
      this.email = user.email;
      this.company_name = user.company_name;
      this.token = user.token;
      this.receive_promotions = user.receive_promotions === 1 ? true : false;
    }
    EventBus.$on('onLogout', () => {
      this.$router.push({
        name: 'Categories',
        params: {
          id: 1
        }
      });
    });
  },
  components: {
    VueRecaptcha
  },
  validations: {
    first_name: {
      required
    },
    last_name: {
      required
    },
    email: {
      required,
      email
    },
    company_name: {
      required
    },
    phone: {
      required
    }
  }
}
