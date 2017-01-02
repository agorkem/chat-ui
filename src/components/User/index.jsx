import React, { PropTypes } from 'react';
import Avatar from '../Avatar';
import styles from './User.scss';

const User = ({ user }) => (
  <div className={styles.user}>
    <div className={styles['user-avatar']}>
      <Avatar />
    </div>
    <div>
      <span className={styles['user-name']}>
        {user.name}
      </span>
      <span className={styles['user-status']}>
            active
          </span>
    </div>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default User;
