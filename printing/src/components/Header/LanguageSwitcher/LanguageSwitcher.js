export default { 
  data() {
    return {
      locales: [{
          localeName: 'ՀԱՅ',
          activeLocale: false,
          locale: 'am'
        },
        {
          localeName: 'ENG',
          activeLocale: false,
          locale: 'en'
        }
      ]
    }
  },
  computed:{
    storage(){
      return this.$store.getters.storage;
    }
  },
  methods: {
    toggleLang(locale) {
      //this.$root._i18n.locale = locale;
      let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
      if (locale != storage.locale) {
        storage.locale = locale;
        localStorage.setItem('platinumInk', JSON.stringify(storage));
        this.$store.dispatch('setStorage', storage);
        location.reload();
      }
    }
  },
  mounted() {
    let currentLocale = this.storage.locale ? this.storage.locale : "en";
    this.locales.forEach(item => {
      item.activeLocale = item.locale == currentLocale;
    });
  }
}
