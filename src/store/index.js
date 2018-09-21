import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { initCart } from '../actions/cart'
import { loadState, saveState } from '../helpers/cartPersistence'
import APImiddleware from '../middleware/API'

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(APImiddleware)
);

const initialState = loadState();
store.dispatch(initCart(initialState));

store.subscribe(() => {
  saveState(store.getState().cart.entries);
});

export default store;