import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const emptyUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = function(state = emptyUser, action){
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, emptyUser, {currentUser});
    default:
      return state;
  }
};

export default SessionReducer;
