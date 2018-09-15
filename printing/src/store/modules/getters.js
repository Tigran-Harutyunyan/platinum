 const appData = state => state.data;
 const getUserInfo = state => state.userInfo;
 const getApiPath = state => state.apiPath;
 const products = state => state.products;
 const categories = state => state.categories;
 const getStorage = state => state.storage;
 const getCustomData = state => state.customData;
 const getSliderImages = state => state.sliderImages;

 const getStaffData = state => state.staff;
 const getOrders = state => state.orders;
 const getCompletedWorks = state => state.completedWorks;
 const partnersImages = state => state.partnersImages;
 const projectsSliderImages  = state => state.projectsSliderImages;
 const scrollParams = state => state.scrollParams;
 const sidebarProducts = state => state.sidebarProducts;
 const getAdvertisements = state => state.advertisements;
 
 const storage = state => state.storage;
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
   getStaffData,
   getOrders,
   getCompletedWorks,
   scrollParams,
   sidebarProducts,
   storage,
   getAdvertisements
 };
