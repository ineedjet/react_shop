import { API_CALL } from '../middleware/API'
import {accessToken, apiUrl, environments, spaces} from "../constants/access";


export const fetchProducts = () => ({
  [API_CALL]: {
    root: apiUrl,
    endpoint: `/spaces/${spaces}/environments/${environments}/entries`,
    method: 'GET',
    accessToken: accessToken,
    query: { 'content_type': 'product' },
    types: [
      'FETCH_PRODUCTS_REQUEST',
      'FETCH_PRODUCTS_SUCCESS',
      'FETCH_PRODUCTS_FAILURE'
    ]
  }
});
