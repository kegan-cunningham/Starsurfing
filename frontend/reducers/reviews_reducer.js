import merge from 'lodash/merge';

import { RECEIVE_REVIEWS, RECEIVE_REVIEW, DESTROY_REVIEW } from '../actions/user_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      const review = action.review;
      return merge({}, state, { [review.id]: review });
    case DESTROY_REVIEW:
      const newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
