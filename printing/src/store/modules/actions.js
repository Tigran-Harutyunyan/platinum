import productsApi from '../../api/productsApi';
import generalApi from '../../api/generalApi';
import utils from '../../utils'; 
 
const getProducts = ({
  commit,
  state
}, data) => {
  return new Promise((resolve, reject) => {
    productsApi.getProducts().then(
      (response) => {
        commit('UPDATE_PRODUCTS', response);

        let productsArray = utils.getProductsArray(response); 
        commit('UPDATE_PRODUCTS_ARRAY', productsArray);
        
        resolve(response);
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
 
const getCompletedWorks = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => { 
    generalApi.getCompletedWorks().then(
      (response) => { 
        if (Array.isArray(response)) {
          commit('UPDATE_COMPLETED_WORKS', response);
        }
        resolve(response);
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};

const getCompletedWorkById = ({
  commit,
  state
}, id) => { 
  return new Promise((resolve, reject) => { 
    generalApi.getCompletedWorkById(id).then(
      (response) => {  
        resolve(response);
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
}; 

const getSliderImages = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => { 
    generalApi.getSliderImages().then(
      (response) => {  
        if (Array.isArray(response)) {
          commit('UPDATE_SLIDER_IMAGES', response)
        }
        resolve(response);
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};

const getProjectSliderImages = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => { 
    generalApi.getProjectSliderImages().then(
      (response) => {  
        if (Array.isArray(response)) {
          commit('PROJECTS_SLIDER_IMAGES', response)
        }
        resolve(response);
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
const getPartnerImages = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => { 
    generalApi.getPartnerImages().then(
      (response) => {  
        if (Array.isArray(response)) { 
          commit('UPDATE_PARTNERS_IMAGES', response)
        }
        resolve(response);
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
const getCategories = ({
  commit,
  state
}, data) => {
  return new Promise((resolve, reject) => {
    productsApi.getCategories().then(
      (response) => {
        resolve(response);
        commit('UPDATE_CATEGORIES', response)
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
 
const getSearchResults = ({
  commit,
  state
}, params) => {
  return new Promise((resolve, reject) => {
    productsApi.getSearchResults(params).then(
      (response) => {
        resolve(response); 
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
   
const getProductById = ({
  commit,
  state
}, {
  id
}) => {
  return new Promise((resolve, reject) => {
    productsApi.getProductById(id).then(
      (response) => {
        resolve(response); 
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
const getCustomData = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => {
    generalApi.getCustomData().then(
      (response) => { 
        if (response) {
          commit('SET_CUSTOM_DATA', response)
        }
        resolve(response); 
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
const getStaff = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => {
    generalApi.getStaff().then(
      (response) => { 
        if (response) {
          commit('UPDATE_STAFF', response)
        }
        resolve(response); 
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};
 
const getSamples = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => {
    generalApi.getSamples().then(
      (response) => {  
        resolve(response); 
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
}; 
 
const setScrollParams = ({
  commit,
  state
}, params) => {
  commit('STORE_SCROLL_PARAMS', params);
};

const setSideBarProducts = ({
  commit,
  state
}, products) => {
  commit('SET_SIDEBAR', products);
};

const getAdvertisements = ({
  commit,
  state
}) => {
  return new Promise((resolve, reject) => {
    generalApi.getAdvertisements().then(
      (response) => { 
        if (response) { 
          commit('SET_ADVERTISEMENTS', response)
        }
        resolve(response); 
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
};

 
export default { 
  getProducts,
  getCompletedWorks,
  getCompletedWorkById,
  getSliderImages,
  getCategories,    
  getProductById,
  getCustomData, 
  getStaff,
  getPartnerImages,
  getProjectSliderImages,
  getSearchResults,
  setScrollParams,
  setSideBarProducts,
  getSamples, 
  getAdvertisements
}
