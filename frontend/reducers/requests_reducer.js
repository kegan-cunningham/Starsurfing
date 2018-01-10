import merge from 'lodash/merge';

import { RECEIVE_REQUESTS, RECEIVE_REQUEST, DESTROY_REQUEST } from '../actions/request_actions';

const requestsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REQUESTS:
      return action.requests;
    case RECEIVE_REQUEST:
      const request = action.request;
      return merge({}, state, { [request.id]: request });
    case DESTROY_REQUEST:
      const newState = merge({}, state);
      delete newState[action.requestId];
      return newState;
    default:
      return state;
  }
};

export default requestsReducer;
