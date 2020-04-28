import React from 'react';
import PropTypes from 'prop-types';
import User from './User.jsx';

const Repo = ({ repos }) => (
 const repoElements = repoElements.map(repo => (
   <li key={Character.id}>
     <User {...user} />
    </li>
 ));
Repo.propTypes = {
  name: PropTypes.string.isRequired,
  repos_url: PropTypes.string.isRequired,
};
export default Repo;
 
