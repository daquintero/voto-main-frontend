import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';
// import {
//   Row,
//   Col,
// } from 'reactstrap';


const IndividualMarker = ({ centroid }) => (
  <Marker
    longitude={centroid[0][0]}
    latitude={centroid[0][1]}
    offsetTop={-75}
    offsetLeft={-15}
  >
    <i className="fal fa-3x fa-map-marker-alt text-white text-center" />
  </Marker>
);

IndividualMarker.propTypes = {
  centroid: PropTypes.instanceOf(Array).isRequired,
};

export default IndividualMarker;
