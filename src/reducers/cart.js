const INITIAL_STATE = {
  entries: []
};

const cart = (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case 'ADD_TO_CART':
      console.log('s', state);
      console.log('i', action.item);
      return { entries: [...state.entries, action.item] };

    default:
      return state;
  }
};

export default cart;