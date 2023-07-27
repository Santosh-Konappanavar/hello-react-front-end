import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ greeting }) => (
  <div>
    <h3>{greeting}</h3>
  </div>
);

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default Greeting;
