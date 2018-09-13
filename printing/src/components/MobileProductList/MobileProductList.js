export default {
  data() {
    return {
      activeNames: ['1'],//'2','3','4'
    };
  }, 
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  watch: {
    $route(to, from) {
      this.close();
    }
  },
  methods: { 
    close (){
      this.$emit('closeDropdown');
    },
    handleChange(val) {}
  }
}
