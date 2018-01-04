import merge from 'lodash/merge';
import { RECEIVE_FORM_TYPE } from '../actions/ui_actions';

const defaultState = { formType: null };

const uiReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_FORM_TYPE:
      return { formType: action.formType };
    default:
      return state;
  }
};

export default uiReducer;
