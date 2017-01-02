import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';

class App extends Component {
  componentWillMount() {
    this.props.loadUser();
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  loadUser: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default connect(
  () => ({}),
  { ...actionCreators },
)(App);
