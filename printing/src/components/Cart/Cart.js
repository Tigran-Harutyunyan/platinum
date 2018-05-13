import { EventBus } from '../../event-bus.js';
export default {
    data() {
        return { 
            value: '',
            cartItems: [],
            isLoading: false
        }
    },
    created() {
        let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
        this.user = storage.user ? storage.user : null;
        this.getBasketProducts(); 
    },
    mounted(){
      EventBus.$on('exitCart', () => { 
        this.$router.push({ name: 'Categories', params: { id: 1 } });
      });
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