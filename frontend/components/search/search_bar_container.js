import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';
import { updateInputValue, loadSuggestions, clearSuggestions } from '../../actions/search_actions';

function mapStateToProps(state) {
  const { value, suggestions, isLoading } = state.search;

  return {
    value,
    suggestions,
    isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSuggestionsFetchRequested(value) {
      return dispatch(loadSuggestions(value));
    },

    onSuggestionsClearRequested() {
      return dispatch(clearSuggestions());
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
