export default {
    name: 'pl-header',
    data() {
        return {
            locales: [
                {
                    localeName: 'ՀԱՅ',
                    activeLocale: false,
                    locale: 'hy'
                },
                {
                    localeName: 'ENG',
                    activeLocale: false,
                    locale: 'en'
                }
            ]
        }
    },
    methods: {
        toggleLang(locale) {
            this.$root._i18n.locale = locale;

            localStorage.setItem('platinumLocale', locale);
            this.$store.dispatch('setLocale', locale);
            this.locales.forEach(item => {
                item.activeLocale = item.locale == locale;
            })
        },
        initScroller() {

            var sectionsController = new ScrollMagic.Controller();
            var sceneNav = new ScrollMagic.Scene({
                triggerElement: "#section-services",
                triggerHook: 'onEnter',
                offset: 203
            })
                .addTo(sectionsController)
                //.addIndicators()
                .on("enter", function (e) {
                    console.log("enter");
                })
            sceneNav.setClassToggle("#top-nav", "section-services");
            sceneNav.setClassToggle("#service-boxes", "active-services");

            sectionsController.scrollTo(function (newpos) {
                if (section_to_scroll) {
                    var offsetTop = 0;
                    switch (section_to_scroll) {
                        case '#section-home':
                            offsetTop = 0;
                            break;
                        case '#section-services':
                            offsetTop = 90;
                            break;
                        case '#section-about-us':
                            offsetTop = 90;
                            break;
                        case '#section-portfolio':
                            offsetTop = 0;
                            break;
                        case '#section-contact-us':
                            offsetTop = 0;
                            break;
                    }
                }

                if (isLargeScreen && section_to_scroll === "#section-home") {
                    $('html,body').animate({
                        scrollTop: 0
                    }, 600, 'easeInOutQuad');
                } else {
                    TweenMax.to(window, 0.5, {
                        scrollTo: {
                            y: newpos - offsetTop
                        }
                    });
                }

            });
        }
    },
    mounted() {
        let currentLocale = localStorage.getItem("platinumLocale") ? localStorage.getItem("platinumLocale") : 'en';
        this.locales.forEach(item => {
            item.activeLocale = item.locale == currentLocale;
        });
        this.initScroller(); 
    }
}
