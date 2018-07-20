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
 export default {
   appData,
   getUserInfo,
   getApiPath,
   products,
   categories,
   getStorage,
   getCustomData,
   getSliderImages,
   partnersImages,
   getCartItems,
   getStaffData,
   getOrders,
   getCompletedWorks
 };
