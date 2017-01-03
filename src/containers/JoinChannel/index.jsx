import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestToJoinChannel } from 'actions';
import Form from 'components/Form';
import styles from './Join.scss';

class JoinChannel extends Component {
  handleJoin(channelName) {
    this.props.requestToJoinChannel(channelName);
  }

  render() {
    return (
      <div className={styles.join}>
        <Form onSubmit={::this.handleJoin} inputPlaceholder="channel name" />
      </div>
    );
  }
}

JoinChannel.propTypes = {
  requestToJoinChannel: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  { requestToJoinChannel },
)(JoinChannel);
