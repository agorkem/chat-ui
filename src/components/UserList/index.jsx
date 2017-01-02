import React, { PropTypes } from 'react';
import User from '../User';
import styles from './UserList.scss';

const UserList = ({ users }) => (
  <div className={styles['user-list']}>
    {users.map(user => <User user={user} key={user.id} />)}
  </div>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserList;
