 Vue.component('tabs', {
     template: ` 
        <div class="tabs">
            <div class="tab-item" 
                    v-for="tab in tabs" 
                    :class="{'active-tab': tab.isActive }" 
                    @click="selectTab(tab)"> <i></i>{{ tab.name }}</div> 
        </div>   
    `,
     props: ['tabs'], 
     methods: {
         selectTab(selectedTab) {
            this.$emit('tab-changed',selectedTab.id);
             this.tabs.forEach(tab => { 
                tab.isActive = (tab.id == selectedTab.id) 
             });
         }
     }
 });

 var app = new Vue({
     el: '#products',
     data: {
        activeTab: 1,
        tabs: [{
                 id: 1,
                 name: 'բեռնել օրինակները',
                 isActive : true
             },
             {
                 id: 2,
                 name: 'ինչպես օգտագործել',
                 isActive : false
             },
             {
                 id: 3,
                 name: 'նկարագիր',
                 isActive : false
             }
         ]
     },
     methods: {
        onTabChange (value){
            this.activeTab = value;
        },
         initSlider() {
             $("#carsSlider").owlCarousel({
                 autoplay: true,
                 autoplayTimeout: 400000,
                 autoplayHoverPause: false,
                 loop: true,
                 smartSpeed: 1000,
                 margin: 0,
                 navContainer: $('.nav-elements'),
                 nav: true,
                 dots: false,
                 items: 1,
                 autoHeight: true,
                 mouseDrag: false,
                 onInitialized: (event) => {
                     setTimeout(() => {
                         $('#carsSlider').show();
                     }, 200);
                 }
             });
         }
     },
     mounted() {
         setTimeout(() => {
             //this.initSlider();
         })
     },
 })