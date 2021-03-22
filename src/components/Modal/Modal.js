import React, { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { isOpen, onSwitchModal, src, alt } = this.props;
    return isOpen ? (
      <div
        className={styles.Overlay}
        onClick={e => {
          e.currentTarget === e.target && onSwitchModal();
        }}
      >
        <div className={styles.Modal}>
          <img src={src} alt={alt}></img>
        </div>
      </div>
    ) : null;
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onSwitchModal: PropTypes.func.isRequired,
};

export default Modal;
