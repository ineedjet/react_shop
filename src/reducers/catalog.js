const INITIAL_STATE = {
  entries: []
};

const catalog = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case 'FETCH_PRODUCTS_SUCCESS':
      return { entries: action.data };

    default:
      return state;
  }
};

export default catalog;