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
            let object = this.product.properties;
            let selectedOptions = [];
            for (const key in object) { 
                if (object.hasOwnProperty(key)) { 
                    const item = object[key]; 
                    if (item.selected.length){
                        item.options.forEach(option => {
                            if (option.price == item.selected){
                                selectedOptions.push(option.id);
                            }
                        });
                    }
                }
            } 
            let formData = new FormData(); 
            formData.append('token', this.user ? this.user.token :"");
            formData.append('product_id', this.product[0].id);
            formData.append('properties', JSON.stringify(selectedOptions));
            if (!this.isLoading) {
                this.isLoading = true;
                this.$store.dispatch('addProductToBasket', {
                    formData
                }).then((response) => {
                    this.isLoading = false;
                    if (response.error) {
                        
                    } else {
                        this.$notify({
                            title: 'Sign up',
                            message: 'Signup success!',
                            position: "top-right",
                            type: "success"
                        });

                    }
                }).catch((error) => {
                    this.isLoading = false
                });
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
        }
    },
    created() {
        this.getProductById();
        let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
        this.user = storage.user; 
    }
}