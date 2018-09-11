export default {
  data() {
    return {
      activeNames: ['1'],//'2','3','4'
    };
  },
  props: {
    productList: {
      type: Object
    }
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
