const INITIAL_STATE = {
  entries: []
};

const catalog = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case 'FETCH_PRODUCTS_REQUEST':
      return state;
    case 'FETCH_PRODUCTS_FAILURE':
      return state;
    case 'FETCH_PRODUCTS_SUCCESS':
      return { entries: action.response.body.items };

    default:
      return state;
  }
};

export default catalog;