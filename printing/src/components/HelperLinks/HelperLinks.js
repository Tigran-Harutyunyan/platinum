import {
  EventBus
} from '../../event-bus.js';
export default {
  data() {
    return {
      items: []
    }
  },
  computed: {
    cartItems: {
      get: function () {
        return this.$store.getters.getCartItems;
      },
      set: function () {}
    },
    storage() {
      return this.$store.getters.getStorage;
    },
    isCartEmpty() {
      return this.cartItems.length === 0
    }
  },
  mounted() {
    let data = this.$store.getters.getCartItems;
    if (!data && this.storage && this.storage.user) {
      this.isLoading = true;
      let formData = new FormData();
      formData.append('token', this.storage.user ? this.storage.user.token : "");
      this.$store.dispatch('getBasketProducts', {
        formData
      }).then((response) => {
        this.isLoading = false;
        if (!response.error) {
          this.items = response;
        }
      }).catch((error) => {});
    }
    EventBus.$on('orderIsPlaced', () => { 
      //this.cartItems = [];
    });
  }
}
