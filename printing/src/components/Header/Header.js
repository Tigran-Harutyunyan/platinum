import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
export default {
    name: 'pl-header',
    data() {
        return {
            loginMode: true,
            showLoginDropdown: false,
            email: "tigran3@mail.ru",
            password: "tigran",
            recoveryMail: "",
            isAuthenticated: false,
            user: {}, 
            locales: [{
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
        logout(){  
            this.$store.dispatch('requestLogOut', {
                token: this.user.token 
            }).then((response) => { 
                this.removeUser()
            }).catch((error) => {
                this.$notify({
                    title: 'Login',
                    message: error ? error : 'Failed to login',
                    position: "top-right",
                    type: "error"
                });
            });
        },
        removeUser(){
            let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
            delete storage.user ;
            localStorage.setItem('platinumInk', JSON.stringify(storage));
            this.$store.dispatch('SET_STORAGE', storage); 
            this.isAuthenticated = false;
        },
        toSignupPage() {
            this.showLoginDropdown = false;
            this.loginMode = true;
            this.$router.push({ name: 'SignUp' });
        },
        hideLoginDropdown() {2
            this.showLoginDropdown = false;
            this.loginMode = true
        },
        onPassRecovery() {

        }, 
        toggleLang(locale) {
            this.$root._i18n.locale = locale;
            let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
            storage.locale = locale;
            localStorage.setItem('platinumInk', JSON.stringify(storage));
            this.$store.dispatch('SET_S2TORAGE', storage);
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
                .on("enter", function(e) {
                    console.log("enter");
                })
            sceneNav.setClassToggle("#top-nav", "section-services");
            sceneNav.setClassToggle("#service-boxes", "active-services");

            sectionsController.scrollTo(function(newpos) {
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
        },
        onLogin() {
            if (!this.$v.$invalid) {
                this.$store.dispatch('requestLogin', {
                    email: this.email,
                    password: this.password
                }).then((response) => {
                    console.log(response)
                    if (response.error) {
                        this.$notify({
                            title: 'Login',
                            message: response.message ? response.message : 'Failed to login',
                            position: "top-right",
                            type: "error"
                        });
                    }
                    if (response.success) {
                        let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
                        storage.user = response;
                        this.user = response;
                        localStorage.setItem('platinumInk', JSON.stringify(storage));
                        this.$store.dispatch('SET_STORAGE', storage);
                        this.showLoginDropdown = false;
                        this.loginMode = true;
                        this.isAuthenticated = true;
                    }
                }).catch((error) => {
                    this.$notify({
                        title: 'Login',
                        message: error ? error : 'Failed to login',
                        position: "top-right",
                        type: "error"
                    });
                });
            }
        }
    },
    mounted() {
        let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
        this.user = storage.user; 
        this.isAuthenticated = storage.user;
        let currentLocale = storage.locale ? storage.locale : "en";
        this.locales.forEach(item => {
            item.activeLocale = item.locale == currentLocale;
        });
        this.initScroller();
    },
    validations: {
        email: {
            required,
            email
        },
        /*   recoveryMail: {
              required,
              email
          }, */
        password: {
            required
        }
    }
}