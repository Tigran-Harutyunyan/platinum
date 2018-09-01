import Tabs from './tabs.vue';
export default {
  name: 'tabs-container',
  components: {
    'tabs': Tabs
  },
  data() {
    return {
      activeTab: 1,
      links: [],
      tabs: [{
          id: 1,
          name: 'message.uploadSamples',
          isActive: true
        },
        {
          id: 2,
          name: 'message.howToUseIt',
          isActive: false
        }
      ]
    }
  },
  methods: {
    onTabChange(value) {
      this.activeTab = value;
    },
    getSamples() {
      this.$store.dispatch('getSamples').then((response) => { 
        if(Array.isArray(response)){
          this.links = response;
        }
      }).catch((error) => {});
    }
  },
  mounted() {
    this.getSamples();
  }
} 