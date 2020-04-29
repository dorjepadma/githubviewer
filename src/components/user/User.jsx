import React from 'react';
import PropTypes from 'prop-types';
 
const User = ({ name, followers, following, url, avatar_url }) => (
  <figure style={{ margin: '1em' }}>
    <img alt={name} style={{ width: '25%' }} src={avatar_url} />
    <figcaption>
      <div style={{ fontWeight: 'bold' }}>
        <p>Name: {name}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following} </p>
        <p>GitHub URL: {url}</p>
      </div>
    </figcaption>
  </figure>
);

User.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
export default User;
