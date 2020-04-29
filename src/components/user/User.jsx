import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, followers, following, profileUrl, avatar_url }) => (

  <figure style={{ margin: '1em' }}>
    <img alt={name} style={{ width: '25%' }} src={avatar_url} />
    <section>
      <div style={{ fontWeight: 'bold' }}>
        <h3>Name: {name} </h3>
        <p>Followers: {followers} </p>
        <p>Following: {following} </p>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">Profile</a>
      </div>
    </section>
  </figure>
   
);

User.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  profileUrl: PropTypes.string.isRequired
};
export default User;
