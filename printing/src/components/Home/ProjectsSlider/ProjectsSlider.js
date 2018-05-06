import { EventBus } from '../../../event-bus';
import data from './slidersData'
export default {
    data() {
        return {
            activeTab: 'graphicDesign',
            web: [],
            graphic: []
        }
    },
    created() {
        this.graphic = data.graphic; 
        this.web = data.web;
        EventBus.$on('projectsTabChanged', tabName => {
            this.activeTab = tabName;
        }); 
    }
}