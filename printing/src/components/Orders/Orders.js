import { EventBus } from '../../event-bus.js';
export default {
    data() {
        return { 
          activeName: 'status'
        }
    },
    methods: {
        handleClick(tab, event) {
            //console.log(tab, event);
        }
    },
    computed: {
        orders: {
            get: function() {
                return this.$store.getters.getOrders;
            },
            set: function() {} 
        }, 
        storage(){
            return this.$store.getters.getStorage;
        }
    },
    mounted(){
        let data = this.$store.getters.getOrders; 
        if (!data && this.storage &&  this.storage.user) {  
            this.isLoading = true;
            let formData = new FormData();
            formData.append('token', this.storage.user ? this.storage.user.token : "");
            this.$store.dispatch('getOrders', {
                formData
            }).then((response) => {
                this.isLoading = false;
                if (response.error) {
                    this.$notify({
                        title: 'Shopping cart',
                        message:  message,
                        position: "top-right",
                        type: "error"
                    });
                    if (message === "Invalid token"){
                        EventBus.$emit('logout');
                    }
                } else {
                    this.cartItems = response;
                    this.isCartEmpty = this.cartItems.length === 0 ? true : false;
                }
            }).catch((error) => {});
        } 
        EventBus.$on('onLogout', () => {
            this.$router.push({ name: 'Categories', params: { id: 1 } });
        });
    } 
}