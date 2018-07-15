import Header from "../Header/Header.vue";
import services from "./Services/Services.vue";
import about from "./About/About.vue";
import staff from "./Staff/Staff.vue"; 
import ProjectsSlider from "./ProjectsSlider/ProjectsSlider.vue";
import reasons from "./Reasons/Reasons.vue"; 
import contact from "./Contact/Contact.vue"; 
import BigSlider from "./BigSlider/BigSlider.vue";
export default {
    data() {
        return { 
            minScreenWidth: 1150,
            canvas: {},
            stage: {},
            exportRoot: {},
            anim_container: {},
            dom_overlay_container: {} 
        }
    }, 
    computed: {
        storage() {
            return this.$store.getters.getStorage
        } 
    },
    methods: {  
        setZindex() {
            //************* SET BANNER Z-INDEX **********************************

            var bannerController = new ScrollMagic.Controller();
            var scene = new ScrollMagic.Scene({
                    triggerElement: "#main-section",
                    triggerHook: '0'
                })
                .addTo(bannerController);
            scene.setClassToggle("#mainSlider", "changed-zindex");
            //trackMouse(sliders); 
        },
        initBannerParallaxScroller() {  
            if ($(window).width() > this.minScreenWidth) {
                var controllerBanner = new ScrollMagic.Controller({
                    globalSceneOptions: {
                        triggerHook: "onEnter",
                        duration: "200%"
                    }
                });
                var sceneBanner = new ScrollMagic.Scene({
                        triggerElement: "#main-section",
                    })
                    .setTween("#mainSlider", {
                        y: "-8%",
                        ease: Linear.easeNone
                    })
                    //.addIndicators()  
                    .addTo(controllerBanner);
            }
        }, 
        initReviews() {
            var reviewsController = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: "onEnter",
                    duration: "200%"
                }
            });
            var scene2 = new ScrollMagic.Scene({
                    triggerElement: "#parallax-trigger"
                })
                .setTween("#parallax1", {
                    y: "10%",
                    ease: Linear.easeNone
                })
                .addTo(reviewsController);
        }  
       
    },
    components: { 
        services,
        about,
        contact,
        reasons,
        staff, 
        "pl-header": Header,
        'projects-slider': ProjectsSlider,
        'big-slider': BigSlider  
    },
    mounted() { 
        this.initReviews();  
        this.setZindex(); 
    }
}