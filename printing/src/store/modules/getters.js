 const appData = state => state.data; 
 const products = state => state.products;
 const categories = state => state.categories; 
 const getCustomData = state => state.customData;
 const getSliderImages = state => state.sliderImages; 
 const getStaffData = state => state.staff;
 const getOrders = state => state.orders;
 const getCompletedWorks = state => state.completedWorks;
 const partnersImages = state => state.partnersImages;
 const projectsSliderImages = state => state.projectsSliderImages;
 const scrollParams = state => state.scrollParams;
 const sidebarProducts = state => state.sidebarProducts;
 const getAdvertisements = state => state.advertisements;
 const getProductsArray = state => state.productsArray;
 const storage = state => state.storage;
 
 export default {
   appData, 
   products,
   categories, 
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
   getAdvertisements,
   getProductsArray
 };
