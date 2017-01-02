import React from 'react';
import styles from './LoginForm.scss';

const LoginForm = () => (
  <div className={styles['login-form']}>
    <input
      type="text"
      className={styles['login-form-name']}
      placeholder="name or email"
    />
    <button className={`${styles['login-form-button']}`} />
  </div>
);

export default LoginForm;
