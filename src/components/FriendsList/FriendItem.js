import React from 'react';
import PropTypes from 'prop-types';

import s from './FriendItem.module.scss';

const FriendItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={s.item}>
      <span
        className={s.status}
        style={{ background: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

FriendItem.defaultProps = {
  isOnline: false,
};

export default FriendItem;
