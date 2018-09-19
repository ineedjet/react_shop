import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = store => next => action => {
  console.log('state: -> ', store.getState());
  setTimeout(function() {
    console.log('state 5s: -> ', store.getState());
  }, 5000);
  next(action);
};


const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger)
);

export default store;