import { EventBus } from '../../event-bus.js';
export default {
    data() {
        return {
            value: '',
            cartItems: [],
            isLoading: false,
            isCartEmpty: ''
        }
    },
    created() {
        let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
        this.user = storage.user ? storage.user : null;
        this.getBasketProducts();
    },
    mounted() {
        EventBus.$on('exitCart', () => {
            this.$router.push({ name: 'Categories', params: { id: 1 } });
        });
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.cartItems.forEach(element => {
                total += parseFloat(element.price);
            });
            return total;
        },
        storage(){
            return this.$store.getters.getStorage;
        },
        token(){
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
                formData.append('id',  this.pendingOrderId );
                this.$store.dispatch('removeBasketProduct', {
                    formData
                }).then((response) => {
                    this.isLoading = false;
                    if (response.success) {
                        this.getBasketProducts(); 
                    } else { 
                        if (response.message) {
                            this.$notify({
                                title: 'Shopping cart',
                                message: response.message,
                                position: "top-right",
                                type: "error"
                            });
                            if (response.message === "Invalid token"){
                                EventBus.$emit('logout');
                            }
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
                    this.$notify({
                        title: 'Shopping cart',
                        message: response.message,
                        position: "top-right",
                        type: "error"
                    });
                    EventBus.$emit('logout');
                } else {
                    this.cartItems = response;
                    this.isCartEmpty  = this.cartItems.length === 0 ? true: false;
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
            //token, basket_id
            let formData = new FormData();
            formData.append('token', this.token);
            formData.append('id',  this.pendingOrderId );
            this.$store.dispatch('moveProductToOrders', {
                formData
            }).then((response) => {
                this.isLoading = false;
                if (response.success) {
                    this.getBasketProducts(); 
                } else { 
                    if (response.message) {
                        this.$notify({
                            title: 'Shopping cart',
                            message: response.message,
                            position: "top-right",
                            type: "error"
                        });
                        if (response.message === "Invalid token"){
                            EventBus.$emit('logout');
                        }
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
        }
    }
}