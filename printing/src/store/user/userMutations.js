 const UPDATE_ORDERS_DATA = (state, items) => {
   state.orders = items;
 };
 const SET_USER_INFO = (state, payload) => {
  state.userInfo = payload;
};
 export default {
  SET_USER_INFO,
   UPDATE_ORDERS_DATA
 }
