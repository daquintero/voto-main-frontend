// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ instance }) => (
  <div>
    {instance.title}
  </div>
);

Card.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
};

export default Card;
