import merge from 'lodash/merge';

import { RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS } from '../actions/user_actions';

const ReviewErrorsReducer = function(state = [], action){
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case CLEAR_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ReviewErrorsReducer;
