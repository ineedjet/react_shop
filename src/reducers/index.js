import { reducer as formReducer } from 'redux-form';
import catalog from './catalog';
import cart from './cart';

export default {
  catalog,
  cart,
  form: formReducer
}