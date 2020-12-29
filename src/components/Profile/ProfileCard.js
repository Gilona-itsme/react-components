import React from 'react';

import s from './Profile.module.scss';
import imageDef from '../../images/defaultImage.jpg';

const ProfileCard = ({ name, tag, location, avatar }) => {
  return (
    <div className={s.description}>
      <img
        src={avatar ?? imageDef}
        alt="Аватар пользователя"
        className={s.avatar}
      />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
};

export default ProfileCard;
