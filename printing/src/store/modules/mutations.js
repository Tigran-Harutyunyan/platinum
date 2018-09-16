 
 const UPDATE_PRODUCTS = (state, products) => {
   state.products = products;
 };
 const UPDATE_CATEGORIES = (state, categories) => {
   state.categories = categories;
 };
 const SET_CUSTOM_DATA = (state, payload) => {
   state.customData = payload;
 };
 const PROJECTS_SLIDER_IMAGES = (state, payload) => {
  state.projectsSliderImages = payload;
};
const SET_ADVERTISEMENTS = (state, payload) => {
  state.advertisements = payload;
};
 const UPDATE_SLIDER_IMAGES = (state, payload) => {
  state.sliderImages = payload;
};
 const UPDATE_PARTNERS_IMAGES = (state, payload) => {
   state.partnersImages = payload;
 };

 const UPDATE_STAFF = (state, items) => {
   state.staff = items;
 };

 const UPDATE_COMPLETED_WORKS = (state, items) => {
   state.completedWorks = items;
 };
 const SEARCH = (state, items) => {
  state.searchResults = items;
};
const STORE_SCROLL_PARAMS = (state, params) => { 
  state.scrollParams = params;
}
const SET_PRODUCT_LIST = (state, products) => { 
  state.sidebarProducts = products;
}
const SET_SIDEBAR = (state, products) => { 
  state.sidebarProducts = products;
}
const UPDATE_PRODUCTS_ARRAY = (state,products) =>{
  state.productsArray = products;
}

 export default { 
   SET_CUSTOM_DATA,
   UPDATE_PRODUCTS,
   UPDATE_CATEGORIES,
   UPDATE_SLIDER_IMAGES,
   PROJECTS_SLIDER_IMAGES,
   UPDATE_PARTNERS_IMAGES, 
   UPDATE_STAFF, 
   UPDATE_COMPLETED_WORKS,
   SEARCH,
   STORE_SCROLL_PARAMS,
   SET_PRODUCT_LIST,
   SET_ADVERTISEMENTS, 
   SET_SIDEBAR,
   UPDATE_PRODUCTS_ARRAY
 }
