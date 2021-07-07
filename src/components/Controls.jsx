import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ text, onChange, onSubmit, inputName = 'text', buttonText = 'Submit' }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name={inputName} value={text} onChange={onChange} />
    <button variant="primary">{buttonText}</button>
  </form>
);

Controls.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputName: PropTypes.string,
  buttonText: PropTypes.string
};

export default Controls;
