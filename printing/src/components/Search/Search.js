var debounce = require('debounce');
import ClickOutside from 'vue-click-outside'
export default {
  data() {
    return {
      searchKey: '',
      searchResults: '',
      showSearchResults: false
    }
  },
  computed: {
    noResults() {
      return this.searchResults.length == 0
    }
  },
  watch:{
    searchKey(val){
      this.search();
    }
  },
  directives: {
    ClickOutside
  },
  methods: {
    close() {
      this.showSearchResults = false;
      this.searchKey = '';
    },
    search: debounce(function (e) {
      if (this.searchKey.trim().length === 0) {
        this.showSearchResults = false;
        this.searchResults = [];
      } else {
        this
          .$store
          .dispatch('getSearchResults', {
            search: this.searchKey
          })
          .then((response) => {
            this.showSearchResults = true;
            this.searchResults = response;
          })
          .catch((error) => {});
      }
    }, 300)
  }
}
