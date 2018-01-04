import { RECEIVE_STARS } from '../actions/star_actions';

const starsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STARS:
      return action.stars;
    default:
      return state;
  }
};

export default starsReducer;
