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
                    name: 'բեռնել օրինակները',
                    isActive: true
                },
                {
                    id: 2,
                    name: 'ինչպես օգտագործել',
                    isActive: false
                },
                {
                    id: 3,
                    name: 'նկարագիր',
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