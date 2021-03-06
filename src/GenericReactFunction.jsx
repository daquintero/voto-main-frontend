// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Declaration
const GenericFunction = ({ section }) => ( // TODO REMOVE IF NOT NEEDED
  <>
    <div>
      {section}
    </div>
  </>
);

GenericFunction.propTypes = {
  section: PropTypes.string,
};

GenericFunction.defaultProps = {
  section: '',
};

export default GenericFunction;
