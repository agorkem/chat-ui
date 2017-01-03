import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { pages } from 'constants/AppSettings';

function checkAuthorization(WrappedComponent) {
  class checkAuthorizationComponent extends Component {
    componentWillMount() {
      if (!this.props.auth) {
        this.props.dispatch(push(pages.login));
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  checkAuthorizationComponent.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  return connect(({ auth }) => ({ auth }))(checkAuthorizationComponent);
}

export default checkAuthorization;
