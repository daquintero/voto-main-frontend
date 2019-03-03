// Absolute Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMapGL from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import { Row, Col, Input } from 'reactstrap';

// Components
// import IndividualMarker from './components/IndividualMarker';

// Actions
import { changeMapViewport } from './redux/actions';

// Data
import mapData from './data/mapDatav4.json';


class Map extends Component {
  static propTypes = {
    // Redux
    map: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      type: 'GID_1',
      party: 'totalValidVotes',
    };
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeViewport);
    clearInterval(this.state.interval);
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnViewportChange = (newMapViewport) => {
    const {
      dispatch,
    } = this.props;

    dispatch(changeMapViewport(newMapViewport));
  };

  handleResizeViewport = () => {
    const { dispatch, map } = this.props;
    dispatch(changeMapViewport({
      ...map.viewport,
      width: '100%',
    }));
  };

  handleRotateElements = () => {};

  handleGetFillColor = (f) => {
    const {
      locationId, hover, type,
    } = this.state;
    if (locationId === f.properties[type] && hover) {
      return [255, 255, 255];
    }
    const colorNum = Math.floor((f.properties.electoralData['2014'].Presidente.totalValidVotes / 1854202) * 255);
    return [colorNum, colorNum, colorNum];
  };

  handleGetElevation = (f) => {
    const { party } = this.state;
    return f.properties.electoralData['2014'].Presidente[party] / 30;
  };

  handleOnHover = (e) => {
    if (e.object) {
      this.setState(prevState => ({
        locationId: e.object.properties[prevState.type],
        hover: true,
        object: e.object,
        x: e.x,
        y: e.y,
        lngLat: e.lngLat,
      }));
    } else {
      this.setState({
        hover: false,
      });
    }
  };

  handleGetCursor = () => (this.state.hover ? 'pointer' : 'move');

  renderTooltip = () => {
    const {
      object, x, y, hover, locationId, type,
    } = this.state;

    return (object && hover) && (
      <div
        className="map__tooltip__wrapper shadow"
        style={{
          position: 'absolute', zIndex: 1, pointerEvents: 'none', left: x, top: y - 80,
        }}
      >
        <p>{mapData.features.filter(f => f.properties[type] === locationId)[0].properties.NAME_1}</p>
      </div>
    );
  };

  renderLayers = () =>
    new GeoJsonLayer({
      data: mapData,
      opacity: 2,
      filled: true,
      wireframe: true,
      extruded: true,
      pickable: true,
      onHover: e => this.handleOnHover(e),
      getLineColor: [100, 100, 100],
      getFillColor: f => this.handleGetFillColor(f),
      getElevation: f => this.handleGetElevation(f),
      updateTriggers: {
        getFillColor: f => this.handleGetFillColor(f),
        getElevation: f => this.handleGetElevation(f),
      },
      transitions: {
        getFillColor: {
          duration: 10,
        },
        getElevation: {
          duration: 500,
        },
      },
    });

  render() {
    // State
    const {
      type, party,
    } = this.state;

    // Props
    const {
      map,
    } = this.props;

    return (
      <Row>
        <Col
          xs={12}
          md={6}
          lg={8}
        >
          <ReactMapGL
            {...map.viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
            onViewportChange={this.handleOnViewportChange}
            mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
          >
            <DeckGL
              {...map.viewport}
              layers={this.renderLayers()}
              getCursor={this.handleGetCursor}
            >
              {this.renderTooltip()}
            </DeckGL>
          </ReactMapGL>
        </Col>
        <Col>
          <Input name="type" type="select" onChange={this.handleOnChange} value={type}>
            <option value="GID_1">Electoral Area</option>
            <option value="NAME_1">Province</option>
          </Input>
          <Input name="party" type="select" onChange={this.handleOnChange} value={party}>
            <option value="totalValidVotes">Total</option>
            <option value="partidoPRD">PRD</option>
          </Input>
        </Col>
      </Row>
    );
  }
}

export default connect(state => ({
  map: state.map,
}))(Map);
