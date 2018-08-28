import {
  required,
  minLength,
  email,
  sameAs
} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      agree: false,
      recaptchaResponse: "",
      first_name: "",
      last_name: "",
      company_name: "",
      email: "",
      password: "",
      receive_promotions: false,
      recaptcha: '',
      passwordConfirm: '',
      isLoading: false,
      birthday_at: "",
      phone: "",
      pickerOptions1: {
        format: 'yyyy-MM-dd'
      },
      birthday_at: '',
      productList: [],
      selectedProduct: {}
    }
  },
  watch:{
    products(products){
      this._proccessProducts(products);
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.$invalid && this.agree && this.recaptchaResponse.length;
    },
    products() {
      return this.$store.getters.products;
    }
  },
  mounted(){
     if(this.$store.getters.products) {
      this.$store.dispatch('getProducts');
     } 
  },
  methods: {
    onDropDownChange(){

    },
    onSubmitSignup() {
      if (!this.isLoading && !this.$v.$invalid) {
        this.isLoading = true;
        let data = {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name,
          company_name: this.company_name,
          phone: this.phone,
          receive_promotions: this.receive_promotions,
          recaptcha: this.recaptchaResponse
        }
        if (this.birthday_at) {
          data.birthday_at = this.birthday_at;
        }

        this.$store.dispatch('requestSignup', data).then((response) => {
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
    _proccessProducts(products) {
      let productList = [];
      for (const key in products) {
        if (products.hasOwnProperty(key)) {
          const element = products[key];
          element.forEach(element => {
          productList.push({
            name: element.name,
            id: element.id,
            selected: false
          });
         });
        }
      }
      this.productList = productList;
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
    companyName: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    passwordConfirm: {
      required,
      sameAsPassword: sameAs('password')
    },
    phone: {
      required
    }
  }
}
