import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import UiReducer from './ui_reducer';

export default combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
  ui: UiReducer
});
