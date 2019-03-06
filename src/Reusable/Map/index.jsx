// Absolute Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMapGL from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';

// Actions
import { changeMapViewport } from './redux/actions';


class Map extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object),
    layerData: PropTypes.instanceOf(Object),
    type: PropTypes.string,
    layerFilters: PropTypes.instanceOf(Object),

    // Redux
    map: PropTypes.instanceOf(Object).isRequired,

    // Callbacks
    onClick: PropTypes.func,
  };

  static defaultProps = {
    data: {},
    layerData: {},
    type: '',
    layerFilters: {},

    // Callbacks
    onClick: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    window.addEventListener('resize', this.handleResizeViewport);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeViewport);
  }

  handleOnViewportChange = (newMapViewport) => {
    const { dispatch } = this.props;

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

  handleGetScaledValue = (f) => {
    const { layerData, layerFilters } = this.props;

    if (layerFilters !== {} && f) {
      const { party, year } = layerFilters;

      const values = layerData[parseInt(year, 10)]
        .slice(1)
        .map(g => g[party]);

      const value = layerData[parseInt(year, 10)]
        .slice(1)
        .filter(g => g.GID === f.properties.CIRCUITO)[0][layerFilters.party];

      return Math.min(255, Math.floor(((5 * 255 * value) / Math.max(...values))));
    }
    return 0;
  };

  handleGetFillColor = (f) => {
    const { locationId, hover } = this.state;
    const { type } = this.props;

    if (f && locationId === f.properties[type] && hover) {
      return [255, 255, 255];
    }

    const colorNum = 255 - this.handleGetScaledValue(f);
    return [colorNum, colorNum, colorNum];
  };

  handleGetElevation = (f) => { // eslint-disable-line
    return this.handleGetScaledValue(f) * 350;
  };

  handleOnHover = (e) => {
    if (e.object) {
      this.setState((prevState, prevProps) => ({
        locationId: e.object.properties[prevProps.type],
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

  handleGetFillColorTransitionDuration = (f) => {
    const { locationId, hover } = this.state;
    const { type } = this.props;

    if (f && locationId === f.properties[type] && hover) {
      return 0;
    }
    return 500;
  };

  handleGetCursor = () => (this.state.hover ? 'pointer' : 'move');

  // renderTooltip = () => {
  //   const {
  //     object, x, y, hover, locationId, type,
  //   } = this.state;
  //
  //   return (object && hover) && (
  //     <div
  //       className="map__tooltip__wrapper shadow"
  //       style={{
  //         position: 'absolute', zIndex: 1, pointerEvents: 'none', left: x, top: y - 80,
  //       }}
  //     >
  //       <p>{mapData.features.filter(f => f.properties[type] === locationId)[0].properties.DIST_NOM}</p>
  //     </div>
  //   );
  // };

  renderLayers = () => {
    const { onClick, data, type } = this.props;
    return new GeoJsonLayer({
      data,
      opacity: 2,
      filled: true,
      wireframe: true,
      extruded: true,
      pickable: true,
      onHover: e => this.handleOnHover(e),
      onClick: e => onClick(e, type),
      getLineColor: [100, 100, 100],
      getFillColor: f => this.handleGetFillColor(f),
      getElevation: f => this.handleGetElevation(f),
      updateTriggers: {
        getFillColor: f => this.handleGetFillColor(f),
        getElevation: f => this.handleGetElevation(f),
      },
      transitions: {
        getFillColor: {
          duration: f => this.handleGetFillColorTransitionDuration(f),
        },
        getElevation: {
          duration: 500,
        },
      },
    });
  };

  render() {
    // Props
    const {
      map, children,
    } = this.props;

    this.handleGetFillColor();

    return (
      <>
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
          />
          {children}
        </ReactMapGL>
      </>
    );
  }
}

export default connect(state => ({
  map: state.map,
}))(Map);
