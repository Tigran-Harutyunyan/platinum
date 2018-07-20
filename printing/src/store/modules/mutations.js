 const SET_DATA = (state, payload) => {
   state.data = payload;
 };
 const SET_USER_INFO = (state, payload) => {
   state.userInfo = payload;
 };
 const UPDATE_PRODUCTS = (state, products) => {
   state.products = products;
 };
 const UPDATE_CATEGORIES = (state, categories) => {
   state.categories = categories;
 };
 const SET_STORAGE = (state, payload) => {
   state.storage = payload;
 };
 const SET_CUSTOM_DATA = (state, payload) => {
   state.customData = payload;
 };
 const UPDATE_SLIDER_IMAGES = (state, payload) => {
   state.sliderImages = payload;
 };
 const UPDATE_PARTNERS_IMAGES = (state, payload) => {
   state.partnersImages = payload;
 };
 const UPDATE_CART_ITEMS = (state, items) => {
   state.cart = items;
 };
 const UPDATE_STAFF = (state, items) => {
   state.staff = items;
 };
 const UPDATE_ORDERS_DATA = (state, items) => {
   state.orders = items;
 };
 const UPDATE_COMPLETED_WORKS = (state, items) => {
   state.completedWorks = items;
 };
 export default {
   SET_DATA,
   SET_USER_INFO,
   SET_STORAGE,
   SET_CUSTOM_DATA,
   UPDATE_PRODUCTS,
   UPDATE_CATEGORIES,
   UPDATE_SLIDER_IMAGES,
   UPDATE_PARTNERS_IMAGES,
   UPDATE_CART_ITEMS,
   UPDATE_STAFF,
   UPDATE_ORDERS_DATA,
   UPDATE_COMPLETED_WORKS
 }
