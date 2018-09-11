import {
  required,
  minLength,
  email,
  sameAs
} from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      isLoading: false,
      first_name: "",
      last_name: "",
      company_name: "",
      email: "",
      receive_promotions: false,
      isLoading: false,
      birthday_at: "",
      phone: "",
      pickerOptions: {
        format: 'yyyy-MM-dd'
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid;
    },
    storage() {
      return this.$store.getters.getStorage;
    }
  },
  methods: {
    updateProfileInfo() {
      if (!this.isLoading && this.isFormValid) {
        this.isLoading = true;
        let data = {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          company_name: this.company_name,
          phone: this.phone,
          receive_promotions: this.receive_promotions ? 1 : 0,
          token: this.token
        }

        if (this.birthday_at) {
          data.birthday_at = this.birthday_at
        }

        this.$store.dispatch('updateProfileInfo', data).then((response) => {
          this.isLoading = false;
          if (response.error) {
            this.$notify({
              title: 'Edit profile',
              message: response.message ? response.message : 'Failed to edit the profile',
              position: "top-right",
              type: "error"
            });
          } else {
            this.$notify({
              title: 'Edit profile',
              message: 'Edit profile success!',
              position: "bottom-right",
              type: "success"
            });
            let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
            storage.user = response;
            storage.user.token = this.token;
            localStorage.setItem('platinumInk', JSON.stringify(storage));
            this.$store.dispatch('setStorage', storage);
          }
        }).catch((error) => {
          this.isLoading = false
        });
      }
    }
  },
  mounted() {
    if (this.storage && this.storage.user) {
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
