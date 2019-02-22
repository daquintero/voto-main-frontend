// Absolute Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMapGL from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';

// Actions
import { changeMapViewport, getMapData } from './redux/actions';


class Map extends Component {
  static propTypes = {
    // Redux
    map: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      dispatch,
    } = this.props;

    dispatch(getMapData())
      .then((action) => {
        console.log(action.error);
      });
  }

  handleOnViewportChange = (newMapViewport) => {
    const {
      dispatch,
    } = this.props;

    dispatch(changeMapViewport(newMapViewport));
  };

  renderLayers = () => {
    const {
      map,
    } = this.props;

    return new GeoJsonLayer({
      data: map.data,
      filled: true,
      getFillColor: () => [0, 0, 0],
    });
  };

  render() {
    // Props
    const {
      map,
    } = this.props;

    return (
      <ReactMapGL
        {...map.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={this.handleOnViewportChange}
      >
        <DeckGL
          {...map.viewport}
          layers={this.renderLayers()}
        />
      </ReactMapGL>
    );
  }
}

export default connect(state => ({
  map: state.openPage.map,
}))(Map);
