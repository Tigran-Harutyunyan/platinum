export default {
  data() {
    return {
      activeName: 'status'
    }
  },
  methods: {
    handleClick(tab, event) {
      //console.log(tab, event);
    },
    getOrders() { 
        this.isLoading = true;  
        this.$store.dispatch('getOrders').then((response) => {
          this.isLoading = false; 
          if (response.error) {
            this.$notify({
              title: 'Shopping cart',
              message: message,
              position: "top-right",
              type: "error"
            }); 
          } else {
            this.cartItems = response;
            this.isCartEmpty = this.cartItems.length === 0 ? true : false;
          }
        }).catch((error) => {});
      } 
  },
  computed: {
    orders: {
      get: function () {
        return this.$store.getters.getOrders;
      },
      set: function () {}
    },
    storage() {
      return this.$store.getters.getStorage;
    }
  },
  mounted() {
    this.getOrders();
  }
} 