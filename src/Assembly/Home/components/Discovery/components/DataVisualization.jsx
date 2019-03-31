// Absolute Imports
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { GeoJsonLayer } from 'deck.gl';

// Components
import Map from '../../../../../Reusable/Map';

// Data
import mapData from '../../../data/ELECTORAL_CIRCUITS_V3.json';
import layerData from '../../../data/data.json';


const options = {
  1994: [
    { value: 'ValidVotes', label: 'Total' },
    { value: 'Arnulfista', label: 'Mireya  Moscoso - Partido Arnulfista' },
    { value: 'PRD', label: 'Ernesto Pérez Balladares - PRD' },
    { value: 'Y', label: 'Ruben Carles - Partido Y' },
    { value: 'MPE', label: 'Ruben Blades -MPE' },
    { value: 'Solidaridad', label: 'Samuel Galindo - Solidaridad' },
    { value: 'PDC', label: 'Eduardo Vallarino- PDC' },
    { value: 'PPD', label: 'Jose Muñoz - PPD' },
  ],
  2004: [
    { value: 'ValidVotes', label: 'Total' },
    { value: 'Arnulfista', label: 'Jose Miguel Alemán-Arnulfista' },
    { value: 'PRD', label: 'Martin Torrijos-PRD' },
    { value: 'Solidaridad', label: 'Guillermo Endara-Solidaridad' },
    { value: 'CD', label: 'Ricardo Martinelli - CD' },
  ],
  2009: [
    { value: 'ValidVotes', label: 'Total' },
    { value: 'PRD', label: 'Balbina Herrera-PRD' },
    { value: 'VMP', label: 'Guillermo Endara-Vanguardia Moral de la Patria' },
    { value: 'CD', label: 'Ricardo Martinelli - CD' },
  ],
  2014: [
    { value: 'ValidVotes', label: 'Total' },
    { value: 'PRD', label: 'Juan Carlos Navarro- PRD' },
    { value: 'Arnulfista', label: 'Juan Carlos Varela - Panameñismo' },
    { value: 'FAD', label: 'Genaro López - FAD' },
    { value: 'CD', label: 'José Domingo Arias- CD' },
    { value: 'Celeste', label: 'Esteban Rodríguez- Celeste' },
    { value: 'Verde', label: 'Gerardo Barroso- Verde' },
    { value: 'Chocolate', label: 'Juan Jované- Chocolate' },
  ],
};


const colorRange = [
  [78, 211, 255],
  [59, 206, 255],
  [20, 196, 255],
  [0, 147, 196],
  [0, 103, 137],
  [0, 44, 59],
];


class DataVisualization extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      locationId: '',
      type: 'CIRCUITO',
      year: 2014,
      party: 'ValidVotes',
      selectedObject: {
        properties: {},
      },
      hasSelected: false,
    };
  }

  getProperty = (obj, property) => {
    let ret;
    ret = obj[property];
    if (ret === undefined) {
      ret = obj[property.toUpperCase()];
    }

    return ret;
  };

  getNameList = (gid) => {
    const { type } = this.state;

    return mapData.features
      .filter(obj => obj.properties[type] === gid)
      .map(obj => obj.properties.DIST_NOM);
  };

  getValue = (locationIdName, locationId) => {
    const { year, party } = this.state;

    try {
      return layerData[year.toString()]
        .slice(1)
        .filter(f => this.getProperty(f, locationIdName) === locationId)[0][party];
    } catch {
      return 10;
    }
  };

  getScaledValue = (locationIdName, locationId) => {
    const { year, party } = this.state;

    const rawValue = this.getValue(locationIdName, locationId);
    const maxValue = Math.max(...layerData[year.toString()]
      .slice(1)
      .map(f => f[party]));

    return rawValue / maxValue;
  };

  getHighestValue = () => {
    this.setState({});
  };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnHover = ({
    object, x, y, lngLat,
  }) => {
    if (object) {
      this.setState(prevState => ({
        locationId: object.properties[prevState.type],
        hover: true,
        hoveredObject: object,
        x,
        y,
        lngLat,
      }));
    } else {
      this.setState({
        hover: false,
      });
    }
  };

  handleOnClick = ({ object }) => {
    const { type } = this.state;

    const gid = object.properties[type];
    this.setState({
      locationId: gid,
      selectedObject: object,
      hasSelected: true,
    });
  };

  handleGetCursor = () => (this.state.hover ? 'pointer' : null);

  handleGetFillColor = (polygonObject) => {
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

    return colorRange[0]
      .map(num =>
        (num - (10 * 255 * this.getScaledValue('GID', this.getProperty(polygonObject.properties, type)))));
  };

  handleGetElevation = (polygonObject) => {
    const { type } = this.state;

    if (!polygonObject) return null;

    return this.getValue('GID', this.getProperty(polygonObject.properties, type));
  };

  handleGetLineColor = (polygonObject) => {
    const { type } = this.state;

    const colorNum = 15 * 255 * this.getScaledValue('GID', this.getProperty(polygonObject.properties, type));

    return Array(3).fill(colorNum);
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
        onHover: e => this.handleOnHover(e),
        onClick: e => this.handleOnClick(e),
        getFillColor: polygonObject => this.handleGetFillColor(polygonObject),
        getElevation: polygonObject => this.handleGetElevation(polygonObject),
        getLineColor: polygonObject => this.handleGetLineColor(polygonObject),
        updateTriggers: {
          getFillColor: polygonObject => this.handleGetFillColor(polygonObject),
          getElevation: polygonObject => this.handleGetElevation(polygonObject),
          getLineColor: polygonObject => this.handleGetLineColor(polygonObject),
        },
        transitions: {
          getFillColor: 25,
          getElevation: 200,
          getLineColor: 200,
        },
      }),
    ];
  };

  renderChild = () => {
    const {
      hover, hoveredObject, selectedObject, hasSelected, type,
    } = this.state;
    const { properties } = hover ? hoveredObject : selectedObject;

    // TODO: Use the min and max values to dynamically set the scale.

    return (
      <>
        {(hover || hasSelected) && (
          <div className="map__info-panel__wrapper">
            <h3 className="text-center">{properties.CIRCUITO}</h3>
            <p className="text-center mb-4">Votos: {this.getValue('GID', this.getProperty(properties, type))}</p>
            {this.getNameList(properties[type]).map(name => (
              <p className="text-center text-black-50">{name}</p>
            ))}
          </div>
        )}
        <div className="map__scale__wrapper">
          <div
            className="map__scale__strip"
            style={{ background: 'linear-gradient(180deg, black, white)' }}
          />
          <span className="many">Mas</span>
          <span className="few">Menos</span>
        </div>
      </>
    );
  };

  render() {
    // State
    const {
      year, party,
    } = this.state;

    return (
      <div className="map__tab__wrapper">
        <Map
          getCursor={this.handleGetCursor}
          renderLayers={this.renderLayers}
        >
          {this.renderChild()}
        </Map>
        <div className="map__control-panel__wrapper">
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
            <span className="text-black-50">Año</span>
          </div>
          <div className="map__control-panel__select__wrapper">
            <Input
              name="party"
              type="select"
              value={party}
              onChange={this.handleOnChange}
            >
              {options[parseInt(year, 10)]
                .map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
              ))}
            </Input>
            <span className="text-black-50">Partido</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DataVisualization;
