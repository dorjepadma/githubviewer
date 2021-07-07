import React from 'react';
import PropTypes from 'prop-types';

const User = ({ image, username, followers, following, profileUrl, }) => (

  <figure style={{ margin: '1em' }}>
    <section>
      <img alt={username} style={{ width: '25%' }} src={image} />
      <div style={{ fontWeight: 'bold' }}>
        <h3>Name: {username} </h3>
        <p>Followers: {followers} </p>
        <p>Following: {following} </p>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">Profile</a>
      </div>
    </section>
  </figure>
   
);

User.propTypes = {
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  profileUrl: PropTypes.string.isRequired
};
export default User;
