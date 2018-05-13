export default {
    data() {
        return {
            options: [{
                value: 'Option1',
                label: 'Option1'
            }, {
                value: 'Option2',
                label: 'Option2'
            }, {
                value: 'Option3',
                label: 'Option3'
            }, {
                value: 'Option4',
                label: 'Option4'
            }, {
                value: 'Option5',
                label: 'Option5'
            }],
            value: '',
            cartItems: [],
            isLoading: false
        }
    },
    created(){
      let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
      this.user = storage.user ? storage.user : null;
      this.getBasketProducts();
    },
    methods: { 
        getBasketProducts() {
            this.isLoading = true;
            let formData = new FormData();
            formData.append('token', this.user ? this.user.token : ""); 
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
}