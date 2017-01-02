import React, { PropTypes } from 'react';
import styles from './MessageList.scss';
import Message from '../Message';

const MessageList = ({ messages }) => (
  <div className={styles['message-list']}>
    {messages.map(
      message => <Message message={message} key={message.id} />,
    )}
  </div>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MessageList;
