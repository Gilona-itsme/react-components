import React from 'react';
import PropTypes from 'prop-types';

import s from './Profile.module.scss';
import imageDef from '../../images/defaultImage.jpg';
import ProfileCard from './ProfileCard';

import Stats from './Stats';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <ProfileCard name={name} tag={tag} location={location} avatar={avatar} />

      <Stats {...stats} />
    </div>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

ProfileCard.defaultProps = {
  avatar: imageDef,
};

export default Profile;
