import merge from 'lodash/merge';

import {
  RECEIVE_USERS,
  RECEIVE_USER
} from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS:
      const users = {};
      action.users.forEach((user) => {
        users[user.id] = user;
      });
      return merge({}, state, users);
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, { [user.id]: user });
    default:
      return state;
  }
};

export default usersReducer;
