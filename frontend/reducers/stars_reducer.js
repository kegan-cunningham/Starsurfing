import { RECEIVE_STARS, RECEIVE_STAR } from '../actions/star_actions';

const starsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STARS:
      return action.stars;
    case RECEIVE_STAR:
      return Object.assign({}, state, { [action.star.id]: action.star });
    default:
      return state;
  }
};

export default starsReducer;
