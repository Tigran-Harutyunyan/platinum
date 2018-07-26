 const appData = state => state.data;
 const getUserInfo = state => state.userInfo;
 const getApiPath = state => state.apiPath;
 const products = state => state.products;
 const categories = state => state.categories;
 const getStorage = state => state.storage;
 const getCustomData = state => state.customData;
 const getSliderImages = state => state.sliderImages;
 const getCartItems = state => state.cart;
 const getStaffData = state => state.staff;
 const getOrders = state => state.orders;
 const getCompletedWorks = state => state.completedWorks;
 const partnersImages = state => state.partnersImages;
 const projectsSliderImages  = state => state.projectsSliderImages;
 const scrollParams = state => state.scrollParams;
 export default {
   appData,
   getUserInfo,
   getApiPath,
   products,
   categories,
   getStorage,
   getCustomData,
   getSliderImages,
   projectsSliderImages,
   partnersImages,
   getCartItems,
   getStaffData,
   getOrders,
   getCompletedWorks,
   scrollParams
 };
