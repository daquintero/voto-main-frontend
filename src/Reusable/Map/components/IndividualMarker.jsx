import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';
// import {
//   Row,
//   Col,
// } from 'reactstrap';


const IndividualMarker = ({ name, centroid, statistics }) => (
  <Marker
    longitude={centroid[0][0]}
    latitude={centroid[0][1]}
    className="map__marker__wrapper"
    offsetTop={-100}
  >
    {name}
    <div className="d-flex">
      {statistics.map(instance => (
        <span>
          <i className={`fal fa-${instance.icon}`} /> {instance.value}
        </span>
      ))}
    </div>
    <div className="map__marker__pointer" />
  </Marker>
);

IndividualMarker.propTypes = {
  name: PropTypes.string.isRequired,
  centroid: PropTypes.instanceOf(Array).isRequired,
  statistics: PropTypes.instanceOf(Object).isRequired,
};

export default IndividualMarker;
