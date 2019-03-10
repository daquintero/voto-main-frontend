// Absolute Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMapGL from 'react-map-gl';
import DeckGL from 'deck.gl';

// Actions
import { changeMapViewport } from './redux/actions';


class Map extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object),
    layerData: PropTypes.instanceOf(Object),
    type: PropTypes.string,
    layerFilters: PropTypes.instanceOf(Object),
    selector: PropTypes.bool,

    // Redux
    map: PropTypes.instanceOf(Object).isRequired,

    // Callbacks
    onClick: PropTypes.func,
    onHover: PropTypes.func,
    renderLayers: PropTypes.func,
    getCursor: PropTypes.func,
  };

  static defaultProps = {
    data: {},
    layerData: {},
    type: '',
    layerFilters: {},
    selector: false,

    // Callbacks
    onClick: () => {},
    onHover: () => {},
    renderLayers: () => {},
    getCursor: () => {},
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

  handleResizeViewport = (e) => {
    const { dispatch, map } = this.props;

    let height;
    if (e.srcElement.innerWidth > 796) {
      height = 350;
    } else {
      height = 200;
    }

    dispatch(changeMapViewport({
      ...map.viewport,
      width: '100%',
      height,
    }));
  };

  handleRotateElements = () => {};

  handleGetElevation = (f) => { // eslint-disable-line
    return this.handleGetScaledValue(f) * 350;
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

  renderTooltip = () => {
    const {
      data, type,
    } = this.props;
    const {
      object, x, y, hover, locationId,
    } = this.state;

    return (object && hover) && (
      <div
        className="map__tooltip__wrapper shadow"
        style={{
          position: 'absolute', zIndex: 1, pointerEvents: 'none', left: x, top: y - 80,
        }}
      >
        <p>{data.features.filter(f => f.properties[type] === locationId)[0].properties.CIRCUITO}</p>
      </div>
    );
  };

  render() {
    // Props
    const {
      map, children, renderLayers, getCursor,
    } = this.props;

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
            layers={renderLayers()}
            getCursor={getCursor}
          >
            {this.renderTooltip()}
          </DeckGL>
          {children}
        </ReactMapGL>
      </>
    );
  }
}

export default connect(state => ({
  map: state.map,
}))(Map);
