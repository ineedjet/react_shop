import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { initCart } from '../actions/cart'
import { loadState, saveState } from '../helpers/cartPersistence'

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);

const initialState = loadState();
store.dispatch(initCart(initialState));

store.subscribe(() => {
  saveState(store.getState().cart.entries);
});

export default store;