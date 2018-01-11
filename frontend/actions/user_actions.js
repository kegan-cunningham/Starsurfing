import * as APIUtil from '../util/user_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const DESTROY_REVIEW = 'DESTROY_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

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
  review,
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const destroyReview = ({ id }) => {
  return {
    type: DESTROY_REVIEW,
    reviewId: id,
  };
};

export const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors,
  };
};

export const clearReviewErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS,
  };
};

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review)),
    errors => {
      return dispatch(receiveReviewErrors(errors.responseJSON));
    }
  ))
);

export const editReview = (review, reviewId) => dispatch => (
  APIUtil.editReview(review, reviewId).then(review => (
    dispatch(receiveReview(review)),
    errors => {
      return dispatch(receiveReviewErrors(errors.responseJSON));
    }
  ))
);

export const deleteReview = (reviewId) => dispatch => {
  return (
    APIUtil.deleteReview(reviewId).then(reviewId => (
      dispatch(destroyReview(reviewId))
    ))
  );
};

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
