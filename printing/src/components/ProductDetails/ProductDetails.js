import {
  EventBus
} from '../../event-bus.js';
import Preloader from '../../commonComponents/Preloader/Preloader.vue';

export default {
  data() {
    return {
      fileList1: [],
      fileList2: [],
      value: '',
      styleObject1: null,
      styleObject2: null,
      product: {},
      copyOfProduct: {},
      productInfo: {},
      isDirty: false,
      isLoading: true,
      showPriceTotal: false,
      isRequiredSelected: false,
      totalPrice: '',
      loading: false,
      selectedOptions: [],
      quantity: ""
    }
  },
  components: {
    Preloader
  },
  computed: {
    storage() {
      return this.$store.getters.getStorage;
    },
    apiPath() {
      return this.$store.getters.getApiPath;
    }
  },
  watch: {
    '$route' (to, from) {
      this.getProductById();
    }
  },
  methods: {
    onDropDownChange() {
      let properties = this.product.sortedProperties;
      let quantityID = '';
      this.selectedOptions = [];
      properties.forEach(element => {
        if (element.selected != "") {
          element.options.forEach(option => {
            if (option.quantity) {
              this.quantity = element.selected
            }
            if (option.id == element.selected) {
              this.selectedOptions.push(option.id);
            }
          });
        }
      });
      if ( this.quantity) {
        // only send requests if quantity is selected   
        this.getProductPrice();
      }
    },

    getProductPrice() {
      this.checkAuth();
      if (!this.user) {
        this.$notify({
          title: 'Cart',
          message: "Please login first",
          position: "top-right",
          type: "error"
        });
        EventBus.$emit('logout');
      } else {
        this.loading = true;
        let formData = new FormData();
        formData.append('token', this.user ? this.user.token : "");
        formData.append('product_id', this.product[0].id);
        formData.append('quantity_id', [ this.quantity]);
        formData.append('properties', JSON.stringify(this.selectedOptions));
        this.$store.dispatch('getProductPrice', {
          formData
        }).then((response) => {
          this.loading = false;
          if (response.error) {
            this.$notify({
              title: 'Get price error',
              message: response.message,
              position: "top-right",
              type: "error"
            });
          } else {
            if (response[0].price) {
              this.showPriceTotal = true;
              this.isDirty = true;
              this.totalPrice = response[0].price;
            }
          }
        }).catch((error) => {
          this.loading = false;
          this.$notify({
            title: 'Get price error',
            message: "Server error",
            position: "top-right",
            type: "error"
          });
        });
      }
    },

    addProductToCart() {
      this.checkAuth();
      if (!this.user && !this.loading) {
        this.$notify({
          title: 'Cart',
          message: "Please login first",
          position: "top-right",
          type: "error"
        });

        EventBus.$emit('logout');
      } else {
        if (!this.isLoading) {
          this.isLoading = true;
          let formData = new FormData(); 
          formData.append('token', this.user ? this.user.token : "");
          formData.append('product_id', this.product[0].id);
          formData.append('properties', JSON.stringify(this.selectedOptions));
          formData.append('quantity_id', [ this.quantity]); 
          if (this.fileList1.length > 0) {
            formData.append('front_side', this.fileList1[0].raw, this.fileList1[0].name);
          }
          if (this.fileList2.length > 0) {
            formData.append('back_side', this.fileList2[0].raw, this.fileList2[0].name);
          }

          this.$store.dispatch('addProductToBasket', {
            formData
          }).then((response) => {
            this.isLoading = false;
            if (response.error) {
              this.$notify({
                title: 'Shopping cart',
                message: response.message,
                position: "top-right",
                type: "error"
              });
            } else {
              this.$notify({
                title: 'Shopping cart',
                message: response.message ? response.message : 'Item is added to shopping cart!',
                position: "top-right",
                type: "success"
              });
              this.$router.push({
                name: 'Cart'
              });
            }
          }).catch((error) => {
            this.isLoading = false;
            this.$notify({
              title: 'Shopping cart',
              message: "Server error",
              position: "top-right",
              type: "error"
            });
          });
        }
      }
    },

    handleChange1(file, fileList) {
      this.proccessFiles(file, fileList, 1);
    },

    handleChange2(file, fileList) {
      this.proccessFiles(file, fileList, 2);
    },

    proccessFiles(file, fileList, side) {
      if (file.raw.type.indexOf('image') != -1) {
        var fr = new FileReader();
        fr.onload = () => {
          let obj = {
            'background-image': `url(${fr.result})`,
            'background-color': 'transparent'
          };
          if (side === 1) {
            this.styleObject1 = obj;
          } else {
            this.styleObject2 = obj;
          }
        }
        fr.readAsDataURL(file.raw);
      }
      if (side === 1) {
        this.fileList1 = fileList.slice(-1);
      } else {
        this.fileList2 = fileList.slice(-1);
      }
    },

    onHandleRemove1(file, fileList) {
      this.handleRemove(file, fileList, 1);
    },

    onHandleRemove2(file, fileList) {
      this.handleRemove(file, fileList, 2);
    },

    handleRemove(file, fileList, side) {
      if (side === 1) {
        this.fileList1 = fileList.slice(-1);
        this.styleObject1 = {};
      } else {
        this.fileList2 = fileList.slice(-1);
        this.styleObject2 = {}
      }
    }, 

    getProductById() {
      this.$store.dispatch('getProductById', {
        id: this.$route.params.id
      }).then((response) => {
        if (response[0]) { 
          this.product = this._handleGetProductResponse(response);

          if (this.product.images) {
            this.product.images.forEach(element => {
              element.image = `${this.apiPath}${element.image}`;
            });
          }
          this.isLoading = false;
          this.productInfo = response[0];
          this.showPriceTotal = countProperties > 0;
          this.copyOfProduct = JSON.parse(JSON.stringify(this.product));
          this.isDirty = false; 
        }
      }).catch((error) => {});
    },

    _handleGetProductResponse(response) {
      let object = response.properties;
      let countProperties = 0;
      let propertyNames = response.property_names;
      let sortedProperties = [];
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          object[key] = {};
          object[key].selected = "";
          object[key].options = element;
          object[key].order_id = this._getSortId(key, propertyNames);
          object[key]._key = key;
          sortedProperties.push(object[key]);
          countProperties++;
        }
      }

      sortedProperties.sort(function (a, b) {
        if (a.order_id < b.order_id) return -1;
        if (a.order_id > b.order_id) return 1;
        return 0;
      });

      response.sortedProperties = sortedProperties; 
      return response;
    
    },

    _getSortId(key, propertyNames) {
      for (const _key in propertyNames) {
        if (propertyNames.hasOwnProperty(_key) && key === propertyNames[_key].name) {
          return parseInt(propertyNames[_key].order_id);
        }
      }
    },

    reset() {
      this.product = JSON.parse(JSON.stringify(this.copyOfProduct));
      this.isDirty = false;
      this.showPriceTotal = false;
    },

    checkAuth() {
      let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
      this.user = storage.user ? storage.user : null;
    }

  },
  created() {
    this.getProductById();
    this.checkAuth();
  },
  mounted() {
    EventBus.$on('authChanged', () => {
      this.reset();
    });
  }
}
