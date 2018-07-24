var debounce = require('debounce');
export default {
  data() {
    return {
      search_key: '',
      searchResults: '',
      showSearchResults: false,
      noResults: false
    }
  },
  computed: {

  },
  methods: {
    checkDropdown() {
      this.showSearchResults = true;
    },
    onSearch: debounce(function (e) {
      this.showSearchResults = false;
      this.searchResults = [];
       
      if (this.search_key.trim().length === 0) {
        this.showSearchResults = false;
        this.searchResults = [];
      } else {
        this.$store.dispatch('getSearchResults', {
          search: this.search_key
        }).then((response) => {
          let results = [];
          if (response.categories && Array.isArray(response.categories)) {
            response.categories.forEach(element => {
              element.url = `/#/category/${element.id}`;
              results.push(element)
            });
          }
          if (response.products && Array.isArray(response.products)) {
            response.products.forEach(element => {
              element.url = `/#/product/${element.id}`;
              results.push(element)
            });
          }
          this.showSearchResults = true;
          this.searchResults = results;

        }).catch((error) => {

        });
      }

    }, 400)
  }
}
