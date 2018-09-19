import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = store => next => action => {
  console.log('Middleware logger: [store] -> ', store.getState());
  setTimeout(function() {
    console.log('Middleware logger 2s: [store]-> ', store.getState());
  }, 2000);
  next(action);
};


const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger)
);

export default store;