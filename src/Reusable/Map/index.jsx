// Absolute Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMapGL from 'react-map-gl';
import DeckGL from 'deck.gl';

// Actions
import { changeMapViewport } from './redux/actions';

// Functions
import breakpoints from '../../shared/utils/breakpoints';


class Map extends Component {
  static propTypes = {
    // Redux
    map: PropTypes.instanceOf(Object).isRequired,

    // Callbacks
    getCursor: PropTypes.func,
    renderLayers: PropTypes.func,
    renderTooltip: PropTypes.func,
  };

  static defaultProps = {
    // Callbacks
    getCursor: () => {},
    renderLayers: () => {},
    renderTooltip: () => {},
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
    if (!e) return null;
    const { innerWidth } = e.srcElement;
    const { dispatch, map } = this.props;

    // Map size strategy:
    // xs -> 500 taller map for phones;
    // sm -> 350 medium height for small tablets;
    // md -> 300 medium height for larger tablets;
    // lg -> 350 medium height for small desktop screens;
    // xl -> 400 map is now much wider than tall for large screens;
    let newViewport;
    if (breakpoints(innerWidth).xs) {
      newViewport = {
        ...map.viewport,
        height: 500,
      };
    }
    if (breakpoints(innerWidth).sm) {
      newViewport = {
        ...map.viewport,
        height: 350,
      };
    }
    if (breakpoints(innerWidth).md) {
      newViewport = {
        ...map.viewport,
        height: 300,
      };
    }
    if (breakpoints(innerWidth).lg) {
      newViewport = {
        ...map.viewport,
        height: 350,
      };
    }
    if (breakpoints(innerWidth).xl) {
      newViewport = {
        ...map.viewport,
        height: 400,
      };
    }

    dispatch(changeMapViewport({
      ...newViewport,
      width: '100%',
    }));

    return null;
  };

  render() {
    // Props
    const {
      map, children, renderLayers, getCursor, renderTooltip,
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
            {renderTooltip()}
          </DeckGL>
          {children}
        </ReactMapGL>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  const { map } = state;

  return {
    map,
  };
};

export default connect(mapStateToProps)(Map);
