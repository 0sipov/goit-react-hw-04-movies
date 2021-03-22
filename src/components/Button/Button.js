import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onAddQuery }) => {
  return (
    <button type="button" className={styles.Button} onClick={onAddQuery}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onAddQuery: PropTypes.func,
};

export default Button;
