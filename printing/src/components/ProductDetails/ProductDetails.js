import { EventBus } from '../../event-bus.js';
export default {
    data() {
        return {
            fileList: [],
            value: '',
            styleObject: null,
            product: {},
            copyOfProduct: {},
            productInfo: {},
            isDirty: false,
            isLoading: false,
            isThereProperties: false
        }
    },
    computed: {
        apiPath() {
            return this.$store.getters.getApiPath;
        },
        totalPrice() {
            let properties = this.product.properties;
            let sum = 0;
            for (const key in properties) {
                if (properties.hasOwnProperty(key)) {
                    if (properties[key].selected) {
                        sum += (+properties[key].selected);
                    }
                }
            }
            if (sum == 0) {
                return "";
            } else {
                this.isDirty = true;
                return sum;
            }
        }
    },
    watch: {
        '$route' (to, from) {
            this.getProductById();
        }
    },
    methods: {
        addProductToCart() {
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
                if (!this.isLoading) {
                    this.isLoading = true;
                    let object = this.product.properties;
                    let selectedOptions = [];
                    for (const key in object) {
                        if (object.hasOwnProperty(key)) {
                            const item = object[key];
                            if (item.selected.length) {
                                item.options.forEach(option => {
                                    if (option.price == item.selected) {
                                        selectedOptions.push(option.id);
                                    }
                                });
                            }
                        }
                    }
                    let formData = new FormData();
                    formData.append('token', this.user ? this.user.token : "");
                    formData.append('product_id', this.product[0].id);
                    formData.append('properties', JSON.stringify(selectedOptions));
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
                            EventBus.$emit('logout');
                        } else {
                            this.$notify({
                                title: 'Shopping cart',
                                message: response.message ? response.message : 'Item is added to shopping cart!',
                                position: "top-right",
                                type: "success"
                            });
                            this.$router.push({name:'Cart'});
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
        handleChange(file, fileList) {
            if (file.raw.type.indexOf('image') != -1) {
                var fr = new FileReader();
                fr.onload = () => {
                    this.styleObject = {
                        'background-image': `url(${fr.result})`,
                        'background-color': 'transparent'
                    }
                }
                fr.readAsDataURL(file.raw);
            }
            this.fileList = fileList.slice(-1);
            /* this.$notify({
              title: 'Upload file',
              message: 'Success!',
              position: "top-right",
              type: "success"
            }); */
        },
        handleRemove(file, fileList) {
            this.fileList = fileList.slice(-1);
            this.styleObject = {}
        },
        getProductById() {
            this.$store.dispatch('getProductById', {
                id: this.$route.params.id
            }).then((response) => {
                if (response[0]) {
                    let object = response.properties;
                    let countProperties = 0;
                    for (const key in object) {
                        if (object.hasOwnProperty(key)) {
                            const element = object[key];
                            object[key] = {};
                            object[key].selected = "";
                            object[key].options = element;
                            countProperties++
                        }
                    }
                    this.product = response;
                    if (this.product.images) {
                        this.product.images.forEach(element => {
                            element.image = `${this.apiPath}${element.image}`;
                        });
                    }
                    this.productInfo = response[0];
                    this.isThereProperties = countProperties > 0;
                    this.copyOfProduct = JSON.parse(JSON.stringify(this.product));
                    this.isDirty = false;
                }
            }).catch((error) => {});
        },
        reset() {
            this.product = JSON.parse(JSON.stringify(this.copyOfProduct));
            this.isDirty = false;
        },
        checkAuth() {
            let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
            this.user = storage.user ? storage.user : null;
        }
    },
    created() {
        this.getProductById();
        this.checkAuth();
    }
}