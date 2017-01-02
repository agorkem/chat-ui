import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import MessageList from 'components/MessageList';
import UserList from 'components/UserList';
import MessageForm from 'components/MessageForm';
import styles from './Chat.scss';

const Chat = ({ addMessage, messages, users }) => (
  <div className={styles.chat}>
    <div className={styles['chat-users']}>
      <UserList users={users} />
    </div>
    <div className={styles['chat-room']}>
      <MessageList messages={messages} />
      <MessageForm onSubmit={message => addMessage(message)} />
    </div>
  </div>
);

Chat.propTypes = {
  addMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    users: state.users,
  };
}

export default connect(
  mapStateToProps,
  actionCreators,
)(Chat);
