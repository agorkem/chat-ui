import React, { PropTypes } from 'react';
import styles from './Button.scss';

const Button = ({ onClick, type, children }) => (
  <button
    type={type}
    className={styles.button}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.element,
};

export default Button;
