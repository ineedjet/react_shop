const INITIAL_STATE = {
  entries: []
};

const cart = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case 'INIT_CART':
      return { entries: action.items };
    case 'ADD_TO_CART':
      return { entries: [...state.entries, action.item] };
    case 'CLEAR_CART':
      return { entries: [] };

    default:
      return state;
  }
};

export default cart;