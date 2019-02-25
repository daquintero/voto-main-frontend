// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';


const StatisticsItem = ({
  id, name, icon, value,
}) => (
  <div className="p-2 text-center justify-content-center" key={id}>
    <i className={`fal p-2 enlarge fa-${icon}`} aria-hidden="true" />
    <div className="justify-content-between">
      <p className="small m-0" >
        {/* Check if number or string */}
        {(typeof value === 'number') ? numeral(value).format('0a') : value}
      </p>
      <p className="small m-0" > {name} </p>
    </div>
  </div>
);

StatisticsItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]).isRequired,
};

export default StatisticsItem;
