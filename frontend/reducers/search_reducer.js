import merge from 'lodash/merge';
import {
        UPDATE_INPUT_VALUE,
        CLEAR_SUGGESTIONS,
        LOAD_SUGGESTIONS_BEGIN,
        MAYBE_UPDATE_SUGGESTIONS
      } from '../actions/search_actions';

const initialState = {
  value: '',
  suggestions: [],
  isLoading: false
};

const searchReducer = (state = initialState, action = {}) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return merge({}, state, { value: action.value });
    case CLEAR_SUGGESTIONS:
      return Object.assign({}, state, { suggestions: [] });
    case LOAD_SUGGESTIONS_BEGIN:
      return merge({}, state, { isLoading: true });
    case MAYBE_UPDATE_SUGGESTIONS:
      return Object.assign({}, state, { suggestions: Object.values(action.suggestions), isLoading: false });
    default:
      return state;
  }
};

export default searchReducer;
