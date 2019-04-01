// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GeoJsonLayer } from 'deck.gl';

// Components
import Loader from '../../../../../shared/components/Loader';
import Map from '../../../../../Reusable/Map';
import GenericWrapper from '../../../../../Reusable/Grid/components/GenericWrapper';

// Actions
import { discoverCandidates } from '../../../redux/actions';

// Data
import mapData from '../../../data/circuito.json';


class DiscoverCandidates extends PureComponent {
  static propTypes = {
    // Redux
    actions: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    candidates: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    // Redux
    candidates: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      locationId: '',
      hover: false,
      type: 'CIRCUITO',
      selectedObject: {
        properties: {},
      },
      hasSelected: false,
    };
  }

  getNameList = (gid) => {
    const { type } = this.state;

    return mapData.features
      .filter(obj => obj.properties[type] === gid)
      .map(obj => obj.properties.DIST_NOM);
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
    const { dispatch } = this.props;

    const gid = object.properties[type];
    dispatch(discoverCandidates(gid));
    this.setState({
      locationId: gid,
      selectedObject: object,
      hasSelected: true,
    });
  };

  handleGetCursor = () => (this.state.hover ? 'pointer' : null);

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
        onClick: e => this.handleOnClick(e),
        onHover: e => this.handleOnHover(e),
        getFillColor: f => this.handleGetFillColor(f, colorRange),
        updateTriggers: {
          getFillColor: f => this.handleGetFillColor(f, colorRange),
        },
        transitions: {
          getFillColor: 25,
        },
      }),
    ];
  };

  renderChild = () => {
    const {
      hover, hoveredObject, selectedObject, hasSelected, type,
    } = this.state;
    const { properties } = hover ? hoveredObject : selectedObject;

    return (hover || hasSelected) && (
      <div className="map__info-panel__wrapper">
        <h3 className="text-center">{properties.CIRCUITO}</h3>
        {this.getNameList(properties[type]).map(name => (
          <p className="text-center">{name}</p>
        ))}
      </div>
    );
  };

  render() {
    const {
      hasSelected, selectedObject: { properties },
    } = this.state;

    // Props
    const {
      candidates, actions: { DISCOVER_CANDIDATES },
    } = this.props;

    return (
      <div className="map__tab__wrapper">
        <Map
          renderLayers={this.renderLayers}
          getCursor={this.handleGetCursor}
        >
          {this.renderChild()}
        </Map>
        {hasSelected ? (
          <h5 className="text-black-50 mt-3">Políticos Circuito {properties.CIRCUITO}</h5>
        ) : (
          <h5 className="text-black-50 mt-3">Haz click en los circuitos del mapa para ver sus politicos.</h5>
        )}
        <hr />
        {DISCOVER_CANDIDATES.loaded ? (
          <GenericWrapper
            parentModelLabel="political.Individual"
            relatedModelLabel="noneType"
            subsetNumber={0}
            light
            instances={candidates}
            gridClass="candidates-grid"
            typeContext="detailed"
          />
        ) : !DISCOVER_CANDIDATES.init && <Loader elemClass="load__page" />}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { actions } = state.home;
  const { candidates } = state.home.discover;

  return {
    actions,
    candidates,
  };
};

export default connect(mapStateToProps)(DiscoverCandidates);
