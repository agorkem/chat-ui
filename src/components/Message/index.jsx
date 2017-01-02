import React, { PropTypes } from 'react';
import styles from './Message.scss';
import Avatar from '../Avatar';

const Message = ({ message }) => (
  <div className={styles.message}>
    <Avatar />
    <div className={styles['message-inner']}>
      <span className={styles['message-username']}>
        agorkem:
      </span>
      <div>
        {message.text}
      </div>
    </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
  }),
};

export default Message;
