const INITIAL_STATE = {
  entries: []
};

const cart = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case 'ADD_TO_CART':
      return { entries: [...state.entries, action.item] };

    default:
      return state;
  }
};

export default cart;