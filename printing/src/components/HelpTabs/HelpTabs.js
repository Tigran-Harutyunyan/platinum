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
                    name: 'message.orderNow',
                    isActive: true
                },
                {
                    id: 2,
                    name: 'message.uploadSamples',
                    isActive: false
                },
                {
                    id: 3,
                    name: 'message.howToUseIt',
                    isActive: false
                }
            ]
        }
    },
    methods: {
        onTabChange(value) {
            this.activeTab = value;
        }
    }
}