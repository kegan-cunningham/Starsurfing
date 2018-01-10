import merge from 'lodash/merge';

import { RECEIVE_REQUESTS, RECEIVE_REQUEST } from '../actions/request_actions';

const requestsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REQUESTS:
      return action.requests;
    case RECEIVE_REQUEST:
      const review = action.request;
      return merge({}, state, { [request.id]: request });
    default:
      return state;
  }
};

export default requestsReducer;
