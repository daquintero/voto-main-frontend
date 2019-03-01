// Custom implementation of React-Image-Gallery
// --------------- IMPORTS --------------------
import React, { PureComponent } from 'react';
import ImageGallery from 'react-image-gallery';

// PropTypes
import PropTypes from 'prop-types';

// TODO Note that backend object has to match this.
export default class VIGallery extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Array).isRequired,
  };

  constructor() {
    super();
    this.state = {
      showFullscreenButton: true,
      showPlayButton: true,
    };
  }
  render() {
    const { instances } = this.props;
    return (
    // Parameters are infinite sliding, fullscreen, thumbnails, navigation
        <>
          {instances[0] ? (
            <ImageGallery
              items={instances}
              showPlayButton={this.state.showPlayButton}
              onSlide={this.onSlide}
              showFullscreenButton={this.state.showFullscreenButton}
            />
          ) : null}
        </>
    );
  }
}
