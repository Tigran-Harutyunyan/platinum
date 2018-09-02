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
      fileList: [], 
      product_id: "", 
      height: "",
      width: "",
      message: "",
      colors: ""
    }
  },
  watch: {
    products(products) {
      this._proccessProducts(products);
    }
  },
  computed: { 
    products() {
      return this.$store.getters.products;
    }
  },
  mounted() {
    if (this.$store.getters.products) {
      this.$store.dispatch('getProducts');
    }
  },
  methods: { 
    onSubmit() {
      if (!this.$v.$invalid) {
        if (this.fileList.length === 0) {
          this.$notify({
            title: 'Custom order',
            message: 'Please upload the file.',
            position: "bottom-right",
            type: "info"
          });
          return;
        }
        if (!this.product_id) {
          this.$notify({
            title: 'Custom order',
            message: 'Please select the product',
            position: "bottom-right",
            type: "info"
          });
          return;
        }
        this.isLoading = true;
        let formData = new FormData();
 
        formData.append('height', this.height);
        formData.append('width', this.width);
        formData.append('colors', this.colors); 
        formData.append('product_id', this.product_id);
        formData.append('message', this.message); 
        if (this.fileList.length > 0) {
          formData.append('logo', this.fileList[0].raw, this.fileList[0].name);
        }

        this.$store.dispatch('customOrder', formData).then((response) => {
          this.isLoading = false;
          if (!response.error){
            this.$notify({
              title: 'Custom order',
              message: 'Success!',
              position: "bottom-right",
              type: "success"
            });
          } else {
            this.$notify({
              title: 'Custom order',
              message: response.message ? response.message : 0,
              position: "bottom-right",
              type: "error"
            });
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
        var fr = new FileReader();
        fr.onload = () => {
          let obj = {
            'background-image': `url(${fr.result})`,
            'background-color': 'transparent'
          }; 
        }
        fr.readAsDataURL(file.raw); 
        this.fileList = fileList.slice(-1);
    },
  },

  validations: { 
    height: {
      required
    },
    width: {
      required
    },
    message: {
      required
    },
    colors: {
      required
    }
  }
}
