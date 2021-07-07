import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';

const Repos = ({ repos }) => {
  const repoItems = repos.map(repo => (
    
    <li key={repos.id}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <ul>
      Repositories:
      {repoItems}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired
};

export default Repos;
