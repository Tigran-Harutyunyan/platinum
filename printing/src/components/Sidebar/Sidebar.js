export default {
  data() {
    return {
      productList: {}
    }
  },
  watch: {
    products: function (newVal, oldVal) {
      let products = newVal;
      for (const key in products) {
        if (products.hasOwnProperty(key)) {
          const element = products[key];
          element[0].categoryName = this.getCategoryName(element[0].category_id); 
        }
      }
      this.productList = products;
      this.$store.dispatch('setSideBarProducts',products);
    },
    categories: function (newVal, oldVal) {
      this.categories = newVal;
      this.$store.dispatch('getProducts');
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    categories: {
      get: function () {
        return this.$store.getters.categories;
      },
      set: function () {}
    },
    sidebarProducts: {
      get: function () {
        return this.$store.getters.sidebarProducts;
      },
      set: function () {}
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
  },
  mounted() { 
    if (this.sidebarProducts) { 
      this.productList = this.sidebarProducts;
    } else {
      let categories = this.$store.getters.categories;
      if (!categories) {
        this.$store.dispatch('getCategories');
      } else {
        this.$store.dispatch('getProducts');
      }
    } 
  }
}
