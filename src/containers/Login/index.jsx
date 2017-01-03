import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from 'actions';
import Form from 'components/Form';
import styles from './Login.scss';

class Login extends Component {
  handleLogin(name) {
    this.props.login(name);
  }

  render() {
    return (
      <div className={styles.login}>
        <Form onSubmit={::this.handleLogin} inputPlaceholder="user name" />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  { login },
)(Login);
