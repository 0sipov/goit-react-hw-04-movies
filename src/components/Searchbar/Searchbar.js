import React, { Component } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    query: '',
  };

  onChangeQuery = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { onChangeQuery } = this;
    const { query } = this.state;
    const { onFetchQuery } = this.props;
    return (
      <header className={styles.Searchbar}>
        <form
          className={styles.SearchForm}
          onSubmit={e => {
            e.preventDefault();
            onFetchQuery(query);
          }}
        >
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onChangeQuery}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onFetchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
