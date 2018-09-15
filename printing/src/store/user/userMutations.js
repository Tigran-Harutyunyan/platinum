 const UPDATE_ORDERS_DATA = (state, items) => {
   state.orders = items;
 };
 const SET_USER_INFO = (state, payload) => {
  state.userInfo = payload;
};
const UPDATE_CART_ITEMS = (state, items) => {
  state.cart = items;
};
 export default {
  SET_USER_INFO,
   UPDATE_ORDERS_DATA,
   UPDATE_CART_ITEMS
 }
