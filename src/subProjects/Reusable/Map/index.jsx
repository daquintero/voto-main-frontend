// Absolute Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMapGL from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';

// Components
import IndividualMarker from './components/IndividualMarker';

// Actions
import { changeMapViewport, getMapData } from './redux/actions';
import { GET_MAP_DATA } from './redux/actionCreators';

// Data
import individualMapLoop from './data/individuals-map-loop.json';

console.log(individualMapLoop);

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
    clearInterval(this.state.interval);
  }

  handleRotateElements = () => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }));
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
      return [255, 255, 255];
    }
    return [0, 0, 0];
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
      updateTriggers: {
        getFillColor: f => this.handleGetFillColor(f),
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
      <ReactMapGL
        {...map.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
        onViewportChange={this.handleOnViewportChange}
      >
        <DeckGL
          {...map.viewport}
          layers={this.renderLayers()}
        />
        <IndividualMarker {...individualMapLoop[index]} />
      </ReactMapGL>
    );
  }
}

export default connect(state => ({
  map: state.openPage.map,
}))(Map);
