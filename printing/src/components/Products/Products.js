import Preloader from '../../commonComponents/Preloader/Preloader.vue';
export default {
    data() {
        return {
            productList: [],
            categoryName: "",
            allProducts: [],
            isLoading: true
        }
    },
    components:{
        Preloader
    },
    watch: {
        '$route' (to, from) {
            this.setCategories(this.categories);
        },
        products(newVal, oldVal) { 
            this.allProducts = newVal;
            this.setProducts(this.allProducts);
        },
        categories(newVal, oldVal) { 
            this.setCategories(newVal);
            this.$store.dispatch('getProducts');
        }
    },
    mounted() {
        let categories = this.$store.getters.categories;
        if (categories) { 
            this.allProducts = this.products;
            this.setCategories(categories); 
        } else {
            this.$store.dispatch('getCategories');
        }
    },
    computed: {
        products() {
            return this.$store.getters.products;
        },
        apiPath() {
            return this.$store.getters.getApiPath;
        },
        categories: {
            get: function() {
                return this.$store.getters.categories;
            },
            set: function() {}
        }
    },
    methods: {
        setProducts(products) {
            this.productList = [];
            for (const key in products) {
                if (products.hasOwnProperty(key)) {
                    const element = products[key];
                    if (this.$route.params.id == element[0].category_id) {
                        element[0].categoryName = this.getCategoryName(element[0].category_id); 
                        this.productList = element;
                    }
                }
            }
            this.isLoading = false;
        },
        setCategories(data) {
            data.forEach(category => {
                if (category.id == this.$route.params.id) {
                    this.categoryName = category.name;
                    if (this.allProducts) {
                        this.setProducts(this.allProducts);
                    }
                }
            });
        },
        getCategoryName(category_id) {
            let categoryName = "";
            this.categories.forEach(category => {
                if (category_id == category.id) {
                    categoryName = category.name;
                }
            });
            return categoryName;
        }
    }
}