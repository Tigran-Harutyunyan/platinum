 <template>
    <div class="tabs">
      <div class="tab-item" 
          v-for="tab in tabs" 
          :class="{'active-tab': tab.isActive }" 
          @click="selectTab(tab)"> <i></i>
          {{ tab.name }}
      </div> 
    </div>   
 </template>
 <script>
    export default {
      name: "tabs",
      props: ["tabs"],
      methods: {
        selectTab(selectedTab) {
          this.$emit("tab-changed", selectedTab.id);
          this.tabs.forEach(tab => {
            tab.isActive = tab.id == selectedTab.id;
          });
        }
      }
    };
</script>
 