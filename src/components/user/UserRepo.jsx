import React from 'react';
import PropTypes from 'prop-types';
import User from './User.jsx';

const CompleteUser = ({ completeUser }) => {
  // const completeUserRepo = completeUser.map(user => (
  //   <li key={user.id}>
  //     <User {...user} />
  //   </li>
  // ));

  return (
    <ul>
      {completeUserRepo}
    </ul>
  );
};
CompleteUser.propTypes = {
  completeUser: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    following: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    repos_url: PropTypes.string.isRequired,
  })).isRequired
};
export default CompleteUser;
 
