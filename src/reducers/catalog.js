const INITIAL_STATE = {
  entries: []
};

const catalog = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    // case 'FETCH_PRODUCTS_REQUEST':
    //   return { entries: [...state.entries, action.type, 1 ]};
    case 'FETCH_PRODUCTS_SUCCESS':
      return { entries: action.data };
    // case 'FETCH_PRODUCTS_FAILURE':
    //   return { entries: [...state.entries, action.type, 1 ]};

    default:
      return state;
  }
};

export default catalog;