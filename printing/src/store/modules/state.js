export const state = {
    data: {},
    userInfo: {},
    products: {},
    categories: [],
    apiPath: "http://api.platinuminkdesign.com",
    storage: {
      locale: "en"
    },
    customData: {},
    sliderImages: [],
    partnersImages: [],
    cart: '',
    staff: '',
    orders: '',
    completedWorks: '',
    projectsSliderImages:'',
    searchResults:'',
    scrollParams:'',
    sidebarProducts:'',
    advertisements: [],
    storage: localStorage.getItem("platinumInk") ? JSON.parse(localStorage.getItem("platinumInk")) : {}
  };