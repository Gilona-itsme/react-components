import React from 'react';
import PropTypes from 'prop-types';

import FriendItem from './FriendItem';

import s from './Friends.module.scss';

const FriendsList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={s.friendList}>{friends.map(FriendItem)}</ul>;
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendsList;
