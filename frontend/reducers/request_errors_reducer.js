import merge from 'lodash/merge';

import { RECEIVE_REQUEST_ERRORS, CLEAR_REQUEST_ERRORS} from '../actions/request_actions';

const RequestErrorsReducer = function(state = [], action){
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_REQUEST_ERRORS:
      return action.errors;
    case CLEAR_REQUEST_ERRORS:
      return [];
    default:
      return state;
  }
};

export default RequestErrorsReducer;
