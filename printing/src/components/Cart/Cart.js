import CartTotals from './CartTotals/CartTotals.vue';
import CartItemActions from './CartItemActions/CartItemActions.vue';
import Preloader from '../../commonComponents/Preloader/Preloader.vue';

export default {
  data() {
    return {
      value: '',
      cartItems: [],
      isLoading: false,
      isCartEmpty: ''
    }
  },
  components: {
    CartTotals,
    CartItemActions,
    Preloader
  },
  created() {
    let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
    this.user = storage.user ? storage.user : null;
    this.getBasketProducts();
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.cartItems.forEach(element => {
        total += parseFloat(element.price);
      });
      return total;
    },
    storage() {
      return this.$store.getters.getStorage;
    },
    token() {
      return this.storage.user ? this.storage.user.token : ""
    }
  },
  methods: { 
    deleteCartItem(id) {
      this.pendingOrderId = id;
      this.$confirm(this.$t('message.cartItemDeletePrompt'), {
        confirmButtonText: this.$t('message.yes'),
        cancelButtonText: this.$t('message.cancel'),
        type: 'warning'
      }).then(() => {
        let formData = new FormData();
        formData.append('token', this.token);
        formData.append('id', this.pendingOrderId);
        this.$store.dispatch('removeBasketProduct', {
          formData
        }).then((response) => {
          this.isLoading = false;
          if (response.success) {
            this.getBasketProducts();
          } else {
            this.$notify({
              title: 'Shopping cart',
              message: response.message ? response.message : '',
              position: "top-right",
              type: "error"
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
      }).catch(() => {});
    },

    getBasketProducts() {
      this.isLoading = true;
      let formData = new FormData();
      formData.append('token', this.token);
      this.$store.dispatch('getBasketProducts', {
        formData
      }).then((response) => {
        this.isLoading = false;
        if (response.error) {
          if (response.message) {
            this.handleErrors(response.message);
          }
        } else {
          this.cartItems = response;
          this.isCartEmpty = this.cartItems.length === 0 ? true : false;
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
    },


    moveProductToOrders() {
      let formData = new FormData();
      let productIds = [];
      this.cartItems.forEach(element => {
        productIds.push(element.id)
      });
      formData.append('token', this.token);
      formData.append('basket_id', JSON.stringify(productIds));

      this.$store.dispatch('moveProductToOrders', {
        formData
      }).then((response) => {
        this.isLoading = false;
        if (response.success) {
          this.$notify({
            title: 'Shopping cart',
            message: 'Order is formed',
            position: "top-right",
            type: "success"
          });
          this.$router.push({
            name: 'Orders'
          });
        } else {
          if (response.message) {
            this.handleErrors(response.message);
          }
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
    },

    handleErrors(message) {
      this.$notify({
        title: 'Shopping cart',
        message: message,
        position: "top-right",
        type: "error"
      });
    }
  }
}
