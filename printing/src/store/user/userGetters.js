const getCartItems = state => state.cart;
const getUser = state => state.user; 
const getLocale = state => state.locale;
const getToken = state => state.token;
const dropdownOpened = state => state.dropdownOpened; 
export default {
  dropdownOpened,
  getCartItems,
  getUser, 
  getLocale,
  getToken
};
