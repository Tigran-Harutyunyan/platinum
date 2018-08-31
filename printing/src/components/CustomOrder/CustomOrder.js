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
      productList: [],
      fileList:[],
      selectedProduct: "",
      formData: {
        product_id: "",
        length: "",
        height: "",
        width: "",
        message: "", 
      }
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
    onSubmit() {
      if (!this.isLoading && !this.$v.$invalid) {
        this.isLoading = true;
        let data = {
          length: this.formData.length,
          height: this.formData.height,
          width: this.formData.width,
          message: this.formData.message,
          product_id: this.company_name,
          phone: this.phone, 
        }
        

        this.$store.dispatch('requestSignup', data).then((response) => {
          this.isLoading = false;
          if (response.error) {
            if (response.message == "Invalid Recaptcha") {
              this.$refs.recaptcha.reset();
            } else {
              this.$notify({
                title: 'Custom order',
                message: response.message ? response.message : 'Failed to sign up',
                position: "top-right",
                type: "error"
              });
            }
          } else {
            this.$notify({
              title: 'Custom order',
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
    },
    handleUpload(file, fileList) {
      if (file.raw.type.indexOf('image') != -1) {
        var fr = new FileReader();
        fr.onload = () => {
          let obj = {
            'background-image': `url(${fr.result})`,
            'background-color': 'transparent'
          };
           
        }
        fr.readAsDataURL(file.raw);
      }
    },
  },

  validations: {
    length: {
      required
    },
    height: {
      required
    },
    width: {
      required,
      email
    },
    message: {
      required
    },
    colors: {
      required
    },
  }
}
