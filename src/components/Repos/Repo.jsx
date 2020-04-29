import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, profileUrl, language, description }) => (
  <section>
    <a href={profileUrl} target="_blank" rel="noopener noreferrer">{name}</a>
    {language && <p>{language}</p>}
    {description && <p>{description}</p>}
  </section>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  language: PropTypes.string,
  description: PropTypes.string
};

export default Repo;
