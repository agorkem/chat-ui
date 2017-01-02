import React from 'react';
import styles from './Avatar.scss';

const Avatar = () => (
  <div className={`${styles.avatar} ${styles['avatar-default']}`} />
);

export default Avatar;

// <img  className='img-responsive'
//       src='http://api.randomuser.me/portraits/thumb/women/39.jpg'/>
