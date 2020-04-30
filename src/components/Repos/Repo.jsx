import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, url, bio, description }) => (
  <section>
    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
    {bio && <p>{bio}</p>}
    {description && <p>{description}</p>}
  </section>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  description: PropTypes.string
};

export default Repo;
