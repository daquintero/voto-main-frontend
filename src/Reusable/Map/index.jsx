// Absolute Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMapGL from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import { Row, Col } from 'reactstrap';

// Components
import IndividualMarker from './components/IndividualMarker';

// Actions
import { changeMapViewport, getMapData } from './redux/actions';
import { GET_MAP_DATA } from './redux/actionCreators';

// Data
import individualMapLoop from './data/individuals-map-loop.json';
import IndividualCard from '../Individual/components/Card';


class Map extends Component {
  static propTypes = {
    // Redux
    map: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    const {
      dispatch,
    } = this.props;

    window.addEventListener('resize', this.handleResizeViewport);

    dispatch(getMapData())
      .then((action) => {
        if (action.type === GET_MAP_DATA.SUCCESS) {
          this.setState({
            interval: setInterval(this.handleRotateElements, 3000),
          });
        }
      });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeViewport);
    clearInterval(this.state.interval);
  }

  handleResizeViewport = () => {
    const { dispatch, map } = this.props;
    dispatch(changeMapViewport({
      ...map.viewport,
      width: '100%',
    }));
  };

  handleRotateElements = () => {
    const { index } = this.state;
    if (index < individualMapLoop.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }));
    } else {
      this.setState({
        index: 0,
      });
    }
  };

  handleOnViewportChange = (newMapViewport) => {
    const {
      dispatch,
    } = this.props;

    dispatch(changeMapViewport(newMapViewport));
  };

  handleGetFillColor = (f) => {
    const { index } = this.state;
    const locationId = individualMapLoop[index].location_id;
    if (locationId === f.properties.CIRCUITO) {
      return [232, 241, 242];
    }
    return [23, 55, 83];
  };

  handleGetElevation = (f) => {
    const { index } = this.state;
    const locationId = individualMapLoop[index].location_id;
    if (locationId === f.properties.CIRCUITO) {
      return 20000;
    }
    return 0;
  };

  renderLayers = () => {
    const {
      map,
    } = this.props;

    return new GeoJsonLayer({
      data: map.data,
      opacity: 2,
      filled: true,
      wireframe: true,
      extruded: true,
      getLineColor: () => [255, 255, 255],
      getFillColor: f => this.handleGetFillColor(f),
      getElevation: f => this.handleGetElevation(f),
      updateTriggers: {
        getFillColor: f => this.handleGetFillColor(f),
        getElevation: f => this.handleGetElevation(f),
      },
    });
  };

  render() {
    // State
    const {
      index,
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
            />
            <IndividualMarker {...individualMapLoop[index]} />
          </ReactMapGL>
        </Col>
        <Col
          xs={12}
          mg={6}
          lg={4}
        >
          <IndividualCard instance={individualMapLoop[index]} />
        </Col>
      </Row>
    );
  }
}

export default connect(state => ({
  map: state.map,
}))(Map);
