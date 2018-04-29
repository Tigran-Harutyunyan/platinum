export default {
    data() {
        return {
            productList: {}  
        }
    },
   
    watch: {
        products: function(newVal, oldVal) {
            let products = newVal;
            for (const key in products) {
                if (products.hasOwnProperty(key)) {
                    const element = products[key];
                    element[0].categoryName = this.getCategoryName(element[0].category_id);
                    element[0].categoryHref = "/#/category/" + element[0].category_id;
                    element.forEach(product => {
                        product.href = "/#/product/" + product.id;
                    });
                }
            }
            this.productList = products;
        },
        categories: function(newVal, oldVal) {
            this.categories = newVal;
            this.$store.dispatch('getProducts');
        }
    },
    computed: {
        products() {
            return this.$store.getters.products;
        },
        categories: {
            get: function() {
                return this.$store.getters.categories;
            },
            set: function() {}
        }
    },
    methods: {
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