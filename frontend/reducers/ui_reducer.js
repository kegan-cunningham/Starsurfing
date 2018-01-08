import merge from 'lodash/merge';
import { RECEIVE_FORM_TYPE, TOGGLE_DROPDOWN } from '../actions/ui_actions';

const defaultState = { formType: null, dropdownOpen: false };

const uiReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_FORM_TYPE:
      return merge({}, state, { formType: action.formType });
    case TOGGLE_DROPDOWN:
      return merge({}, state, { dropdownOpen: !state.dropdownOpen });
    default:
      return state;
  }
};

export default uiReducer;
