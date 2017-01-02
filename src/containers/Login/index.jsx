import React from 'react';
import { connect } from 'react-redux';
import LoginForm from 'components/LoginForm';
import styles from './Login.scss';

const Login = () => (
  <div className={styles.login}>
    <LoginForm />
  </div>
);

export default connect(() => ({}))(Login);
