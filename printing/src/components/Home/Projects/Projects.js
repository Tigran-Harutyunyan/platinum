import { EventBus } from '../../../event-bus';
export default {
    data() {
        return {
            tabs: [{
                    id: "graphicDesign",
                    tabText: this.$t('message.projects.tab1'),
                    isActive: true
                },
                {
                    id: "webDesign",
                    tabText: this.$t('message.projects.tab2'),
                    isActive: false
                }, {
                    id: "outdoorAdvertising",
                    tabText: this.$t('message.projects.tab3'),
                    isActive: false
                }, {
                    id: "digitalPrinting",
                    tabText: this.$t('message.projects.tab4'),
                    isActive: false
                }, {
                    id: "offsetPrinting",
                    tabText: this.$t('message.projects.tab5'),
                    isActive: false
                }, {
                    id: "largeFormat",
                    tabText: this.$t('message.projects.tab6'),
                    isActive: false
                }, {
                    id: "others",
                    tabText: this.$t('message.projects.tab7'),
                    isActive: false
                }
            ]
        }
    },
    methods: {
        onTabChange(tab) { 
            this.tabs.forEach(element => {
                element.isActive = element.id == tab;
            });
            EventBus.$emit('projectsTabChanged', tab);
        }
    }
}