import { combineReducers } from 'redux';

import starsReducer from './stars_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  stars: starsReducer,
  users: usersReducer,
});

export default entitiesReducer;
