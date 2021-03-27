import React, { Component } from 'react';

class SearchBar extends Component {
  state = { query: '' };

  handleChange = event => {
    return this.setState({ query: event.target.value });
  };

  render() {
    return (
      <>
        <h1>Search movie</h1>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.onSubmit(this.state.query);
          }}
        >
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

export default SearchBar;
