import {apiUrl, accessToken, spaces, environments} from '../constants/access';
import request from 'superagent';

export const fetchProductsSuccess = (data) => ({ type: 'FETCH_PRODUCTS_SUCCESS', data });
export const fetchProductsFailure = () => ({ type: 'FETCH_PRODUCTS_FAILURE' });
export const fetchProductsRequest = () => ({ type: 'FETCH_PRODUCTS_REQUEST' });

export function fetchProducts(){
  return function (dispatch) {
    dispatch(fetchProductsRequest());

    request
      .get(`${apiUrl}/spaces/${spaces}/environments/${environments}/entries`)
      .query({ 'content_type': 'product'})
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body: { items } }) => {
        dispatch(fetchProductsSuccess(items));
      });

  }
}