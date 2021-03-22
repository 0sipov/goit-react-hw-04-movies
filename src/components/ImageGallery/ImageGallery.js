import React from 'react';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGalery = ({ children }) => {
  return <ul className={styles.ImageGallery}>{children}</ul>;
};

ImageGalery.propTypes = {
  children: PropTypes.element,
};

export default ImageGalery;
