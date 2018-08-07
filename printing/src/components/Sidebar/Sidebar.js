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
          element.forEach(product => {
            product.isActive = product.id == this.$route.params.id ? true : false;
          });
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
    selectCategory(item) {
      for (const key in this.productList) {
        if (this.productList.hasOwnProperty(key)) {
          const element = this.productList[key];
          element.forEach(product => {
            product.isActive = false;
          });
        }
      }
      this.$forceUpdate();
      this.$router.push({
        name: 'Categories',
        params: {
          id: item.category_id
        }
      });
    },
    selectProduct(item) {
      for (const key in this.productList) {
        if (this.productList.hasOwnProperty(key)) {
          const element = this.productList[key];
          element.forEach(product => {
            product.isActive = product.id == item.id ? true : false;
          });
        }
      }
      this.$router.push({
        name: 'ProductDetail',
        params: {
          id: item.id
        }
      });
      this.$forceUpdate();
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
