import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, followers, following, URL, avatar_url }) => (
  <figure>
    <img src={avatar_url} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{followers}</p>
      <p>{following} </p>
      <p>{URL}</p>
    </figcaption>
  </figure>
);

User.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired
};
export default User;
