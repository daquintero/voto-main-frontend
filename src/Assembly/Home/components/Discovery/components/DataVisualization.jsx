// Absolute Imports
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { GeoJsonLayer } from 'deck.gl';

// Components
import Map from '../../../../../Reusable/Map';

// Date
import mapData from '../../../data/ELECTORAL_CIRCUITS_V3.json';
// import layerData from '../../../data/data.json';


class DataVisualization extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      year: '',
      party: '',
    };
  }

  handleGetFillColor = (polygonObject, colorRange) => {
    const {
      locationId, type, hover, selectedObject,
    } = this.state;

    if (!polygonObject) return colorRange[0];

    if (polygonObject.properties[type] === selectedObject.properties[type]) {
      return [255, 255, 255];
    }

    if (polygonObject.properties[type] === locationId && hover) {
      return [215, 215, 215];
    }

    return colorRange[0].map(num => num + (polygonObject.properties.index * 2));
  };

  renderLayers = () => {
    const lightSettings = {
      lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
      ambientRatio: 0.4,
      diffuseRatio: 0.6,
      specularRatio: 0.2,
      lightsStrength: [0.8, 0.0, 0.8, 0.0],
      numberOfLights: 2,
    };

    const colorRange = [
      [78, 211, 255],
      [59, 206, 255],
      [20, 196, 255],
      [0, 147, 196],
      [0, 103, 137],
      [0, 44, 59],
    ];

    return [
      new GeoJsonLayer({
        data: mapData,
        lightSettings,
        colorRange,
        opacity: 2,
        wireframe: true,
        stroked: true,
        extruded: true,
        pickable: true,
        onHover: e => this.handleGetFillColor(e),
        updateTriggers: {
          getFillColor: e => this.handleGetFillColor(e),
        },
        transitions: {
          getFillColor: 25,
        },
      }),
    ];
  };

  render() {
    // State
    const {
      year, party,
    } = this.state;

    return (
      <div className="map__tab__wrapper">
        <Map>
          <div className="map__scale__wrapper">
            <div className="map__scale__strip" />
            <span className="many">100%</span>
            <span className="few">0%</span>
          </div>
        </Map>
        <div className="map__control-panel__wrapper">
          <div className="map__control-panel__select__wrapper">
            <Input
              name="party"
              type="select"
              value={party}
              onChange={this.handleOnChange}
            >
              <option value="ValidVotes">Total</option>
              <option value="Arnulfista">Arnulfista</option>
              <option value="Y">Y</option>
              <option value="Solidaridad">Solidaridad</option>
              <option value="PRD">PRD</option>
              <option value="PDC">PDC</option>
              <option value="PPD">PPD</option>
              <option value="MPE">MPE</option>
            </Input>
            <span>Partido</span>
          </div>
          <div className="map__control-panel__select__wrapper">
            <Input
              name="year"
              type="select"
              value={year}
              onChange={this.handleOnChange}
            >
              <option value="2014">2014</option>
              <option value="2009">2009</option>
              <option value="2004">2004</option>
              <option value="1994">1994</option>
            </Input>
            <span>Año</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DataVisualization;
