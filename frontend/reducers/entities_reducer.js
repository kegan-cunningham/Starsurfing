import { combineReducers } from 'redux';

import starsReducer from './stars_reducer';
import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer';
import requestsReducer from './requests_reducer';

const entitiesReducer = combineReducers({
  stars: starsReducer,
  users: usersReducer,
  reviews: reviewsReducer,
  requests: requestsReducer,
});

export default entitiesReducer;
