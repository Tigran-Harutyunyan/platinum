export default {
    data() {
        return {}
    },
    computed: {
        cartItems: {
            get: function() {
                return this.$store.getters.getCartItems;
            },
            set: function() {} 
        }, 
        storage(){
            return this.$store.getters.getStorage;
        }
    },
    mounted() { 
        let data = this.$store.getters.getCartItems;
        if (!data && this.storage &&  this.storage.user) { 
            this.isLoading = true;
            let formData = new FormData();
            formData.append('token', this.storage.user ? this.storage.user.token : "");
            this.$store.dispatch('getBasketProducts', {
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
                    EventBus.$emit('logout');
                } else {
                    this.cartItems = response;
                    this.isCartEmpty = this.cartItems.length === 0 ? true : false;
                }
            }).catch((error) => {});
        } 
    }
}