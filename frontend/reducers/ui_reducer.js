import merge from 'lodash/merge';
import { RECEIVE_FORM_TYPE, TOGGLE_DROPDOWN, TOGGLE_REQUEST_SUCCESS_MESSAGE } from '../actions/ui_actions';

const defaultState = { formType: null, dropdownOpen: false, requestSuccessMessageOn: false };

const uiReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_FORM_TYPE:
      return merge({}, state, { formType: action.formType });
    case TOGGLE_DROPDOWN:
      return merge({}, state, { dropdownOpen: !state.dropdownOpen });
    case TOGGLE_REQUEST_SUCCESS_MESSAGE:
      return merge({}, state, { requestSuccessMessageOn: !state.requestSuccessMessageOn });
    default:
      return state;
  }
};

export default uiReducer;
