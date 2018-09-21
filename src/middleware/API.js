import request from 'superagent';
import { stringify } from 'qs'

export const API_CALL = 'API_CALL';

const APICall = (root, endpoint, method, accessToken, query, payload) => {

  console.log("senging ->", payload);

  let r = request[method.toLowerCase()](`${root}${endpoint}`);
  if (query)
    r = r.query(stringify(query));
  if (accessToken)
    r = r.set('Authorization', `Bearer ${accessToken}`);
  if (payload)
    r = r.send(stringify(payload));
  return r;
};

export default store => next => action => {

  if (!action[API_CALL]) {
    next(action);
    return;
  }

  const {
    root,
    endpoint,
    method,
    accessToken,
    query,
    payload,
    types
  } = action[API_CALL];

  const [ requestType, successType, failureType ] = types;

  const nextAction = (action, data) => (
    Object.assign({}, action, data, { [API_CALL]: undefined })
  );

  store.dispatch(nextAction(action, { type: requestType }));

  const promise = APICall(
    root,
    endpoint,
    method,
    accessToken,
    query,
    payload,
    types
  );

  promise
    .then((response) => {
      store.dispatch(nextAction(action, { type: successType, response }));
    })
    .catch((error) => {
      store.dispatch(nextAction(action, { type: failureType, error }));
    });

  return promise;
};