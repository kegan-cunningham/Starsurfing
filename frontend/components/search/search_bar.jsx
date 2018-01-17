import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      isLoading: false,
    };

    this.loadSuggestions = this.loadSuggestions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  loadSuggestions(value) {
    // Cancel the previous request
    if (this.lastRequestId !== null) {
      clearTimeout(this.lastRequestId);
    }

    this.setState({
      isLoading: true,
    });

    this.lastRequestId = setTimeout(() => {
      this.setState({
        isLoading: false,
        suggestions: this.props.onSuggestionsFetchRequested(value),
      });
    }, 600);

    //force a rerender
  }

  update(field) {
    return e => {
      this.loadSuggestions(e.currentTarget.value);
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleClick(id) {
    return (e) => {
      e.preventDefault();
      this.setState({ value: '' });
      this.props.onSuggestionsClearRequested();
      this.props.history.push(`/stars/${id}`);
    };
  }

  render() {
    const { value, suggestions, isLoading, onSuggestionsFetchRequested,
            onSuggestionsClearRequested, } = this.props;
    let results = suggestions.map((suggestion) => {
      return <button
                className='search-result'
                onClick={this.handleClick(suggestion.id)}
              >
                {suggestion.name}
              </button>;
    });
    if (this.state.value.length > 0 && results.length === 0) {
      if (this.state.isLoading === false) {
        results = [
          <button className='search-result'>
            No results found
          </button>,
        ];
      } else {
        results = [
          <button className='search-result'>
            Loading...
          </button>,
        ];
      }
    }

    return (
      <div>
        <input
          type="text"
          placeholder="Where do you want to go?"
          value={this.state.value}
          onChange={this.update('value')}
          className="search-bar"
        />
      <section className="search-results">
        { results }
      </section>
      </div>
    );
  }
}

export default SearchBar;
