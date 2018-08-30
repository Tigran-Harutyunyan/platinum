import Tabs from './tabs.vue';
export default {
  name: 'tabs-container',
  components: {
    'tabs': Tabs
  },
  data() {
    return {
      activeTab: 1,
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
        if (response.error) {

        } else {

        }
      }).catch((error) => {});
    }
  },
  mounted() {
    this.getSamples();
  }
} 