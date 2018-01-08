import * as APIUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchReviews = (userId) => dispatch => (
  APIUtil.fetchReviews(userId).then(reviews => (
    dispatch(receiveReviews(reviews))
  ))
);

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
