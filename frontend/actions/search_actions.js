import * as APIUtil from '../util/star_util';

export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const MAYBE_UPDATE_SUGGESTIONS = 'MAYBE_UPDATE_SUGGESTIONS';
export const LOAD_SUGGESTIONS_BEGIN = 'LOAD_SUGGESTIONS_BEGIN';

export const loadSuggestions = (value) => {
  return dispatch => {
    dispatch(loadSuggestionsBegin());
    APIUtil.fetchStars(value).then(stars => {
      dispatch(maybeUpdateSuggestions(stars, value));
    }
    );
  };
};

export const updateInputValue = (value) => {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  };
};

export const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS
  };
};

export const loadSuggestionsBegin = () => {
  return {
    type: LOAD_SUGGESTIONS_BEGIN
  };
};

export const maybeUpdateSuggestions = (suggestions, value) => {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    value
  };
};
