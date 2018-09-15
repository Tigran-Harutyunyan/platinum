export const state = {
    data: {}, 
    products: {},
    categories: [],
    apiPath: "http://api.platinuminkdesign.com",
    storage: {
      locale: "en"
    },
    customData: {},
    sliderImages: [],
    partnersImages: [], 
    staff: '', 
    completedWorks: '',
    projectsSliderImages:'',
    searchResults:'',
    scrollParams:'',
    sidebarProducts:'',
    advertisements: [],
    storage: localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {}
  };