import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, id, onSwitchModal }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={el => {
        onSwitchModal(el.target.id);
      }}
    >
      <img
        src={src}
        alt={alt}
        id={id}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onSwitchModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
