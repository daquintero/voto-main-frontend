// Aboslute Imports
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

// Components
import Map from '../../../../../Reusable/Map';


class DataVisualization extends PureComponent {
  static propTypes = {};

  renderLayers = () => {};

  render() {
    return (
      <div className="map__tab-panel__wrapper">
        <Map />
      </div>
    );
  }
}

export default DataVisualization;
