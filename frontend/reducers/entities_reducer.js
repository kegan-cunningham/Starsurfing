import { combineReducers } from 'redux';

import starsReducer from './stars_reducer';

const entitiesReducer = combineReducers({
  stars: starsReducer
});

export default entitiesReducer;
