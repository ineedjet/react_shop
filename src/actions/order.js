import { API_CALL } from '../middleware/API'
import {accessToken, apiUrl, environments, spaces} from "../constants/access";


export const submitOrder = (data) => ({
  [API_CALL]: {
    root: apiUrl,
    endpoint: `/spaces/${spaces}/environments/${environments}/orders`,
    method: 'POST',
    accessToken: accessToken,
    query: { 'content_type': 'product' },
    payload: data,
    types: [
      'SUBMIT_ORDER_REQUEST',
      'SUBMIT_ORDER_SUCCESS',
      'SUBMIT_ORDER_FAILURE'
    ]
  }
});