import React from 'react';
import PropTypes from 'prop-types';

const GenericFunction = ({ section }) => (
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
