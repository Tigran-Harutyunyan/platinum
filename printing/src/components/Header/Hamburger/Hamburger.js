export default {
  data() {
    return { 
        isActive: false
    }
  }, 
  methods: {
    goTo(section) {
        let param = '';
        let customOffset = 0;
        switch (section) {
          case 'services':
            param = '#section-services';
            break;
          case 'about-us':
            param = '#section-about-us';
            break;
          case 'projects':
            param = '#section-portfolio';
            break;
          case 'why':
            param = '#reasons-section';
            break;
          case 'staff':
            param = '#staff-section';
            customOffset = 50;
            break;
          case 'contact-us':
            param = '#section-5';
            customOffset = -140;
            break;
          default:
            param = '';
        }
        this.$router.push({
          name: 'Home'
        });
        //this.$router.push({ name: 'Home', params: { section: section } });
        this.isHamburgerActive = false;
        $('html, body').animate({
          scrollTop: !param ? 0 : $(param).offset().top - customOffset
        }, 0);
      },
  }
}
