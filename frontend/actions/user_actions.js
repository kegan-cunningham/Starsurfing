import * as APIUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const fetchUsers = (userIds) => dispatch => {
  const users = [];
  for (let i = 0; i < userIds.length; i++) {
    APIUtil.fetchUser(userIds[i]).then((user) => {
      users.push(user);
    }, (error) => {
      console.log(error);
    }).then(() => {
      if (i === userIds.length - 1) {
        return dispatch(receiveUsers(users));
      }
    });
  }
};

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);
