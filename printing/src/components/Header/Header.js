import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
import { EventBus } from '../../event-bus.js';
export default {
    name: 'pl-header',
    data() {
        return {
            loginMode: true,
            showLoginDropdown: false,
            email: "",
            password: "",
            recoveryMail: "",
            isAuthenticated: false,
            search_key: '',
            isHamburgerActive: false,
            user: {},
            currentRoute: "",
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
    watch: {
        '$route' (to, from) {
            this.currentRoute = to.name;
        }
    },
    methods: {
        logout() {
            this.checkAuth();
            if (this.user) {
                let formData = new FormData();
                formData.append('token', this.user ? this.user.token : "");
                this.$store.dispatch('requestLogOut', {
                    formData
                }).then((response) => {
                    this.removeUser();
                }).catch((error) => {
                    this.removeUser();
                });
            } else {
                this.removeUser();
            }
        },
        removeUser() {
            let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
            delete storage.user;
            localStorage.setItem('platinumInk', JSON.stringify(storage));
            this.$store.dispatch('setStorage', storage);
            this.isAuthenticated = false;
            EventBus.$emit('exitCart');
        },
        toSignupPage() {
            this.showLoginDropdown = false;
            this.loginMode = true;
            this.$router.push({ name: 'SignUp' });
        },
        hideLoginDropdown() {
            this.showLoginDropdown = false;
            this.loginMode = true
        },
        onPassRecovery() {

        },
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
            this.$router.push({ name: 'Home'});
            //this.$router.push({ name: 'Home', params: { section: section } });
            this.isHamburgerActive = false;
            setTimeout(() => {
                $('html, body').animate({
                    scrollTop: !param ? 0 : $(param).offset().top - customOffset
                }, 200);
            },200) 
        },
        toggleLang(locale) {
            //this.$root._i18n.locale = locale;
            let storage = localStorage.getItem('platinumInk') ? JSON.parse(localStorage.getItem("platinumInk")) : {};
            if (locale != storage.locale) {
                storage.locale = locale;
                localStorage.setItem('platinumInk', JSON.stringify(storage));
                this.$store.dispatch('setStorage', storage);
                location.reload();
            }
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
                    //console.log("enter");
                })
            sceneNav.setClassToggle("#top-nav", "section-services");
            sceneNav.setClassToggle("#service-boxes", "active-services"); 
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
                        this.$store.dispatch('setStorage', storage);
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
        },
        checkAuth() {
            let storage = localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {};
            this.user = storage.user ? storage.user : null;
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
        this.currentRoute = this.$route.name;
        EventBus.$on('logout', () => {
            this.removeUser();
        });
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