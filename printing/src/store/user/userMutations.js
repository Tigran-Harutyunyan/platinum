 const UPDATE_ORDERS_DATA = (state, items) => {
   state.orders = items;
 };
 const SET_USER = (state, payload) => { 
   state.user = payload;
 };
 const UPDATE_CART_ITEMS = (state, items) => {
   state.cart = items;
 };
 const SET_LOCALE = (state, locale) => {
   state.locale = locale;
 };
 const SET_TOKEN = (state, token) => {
  state.token = token;
};
const DELETE_TOKEN = (state, token) => {
  state.token = '';
};
 export default {
   SET_USER,
   UPDATE_ORDERS_DATA,
   UPDATE_CART_ITEMS,
   SET_LOCALE,
   SET_TOKEN,
   DELETE_TOKEN
 }
