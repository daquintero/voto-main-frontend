// Custom implementation of React-Image-Gallery
// --------------- IMPORTS --------------------
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';


// TODO Note that backend object has to match this.
export default class VIGallery extends PureComponent {
    static propTypes = {
      data: PropTypes.arrayOf(PropTypes.shape({
        original: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })),
    };
    static defaultProps = {
      data: [],
    };

    constructor() {
      super();
      this.state = {
        showFullscreenButton: true,
        showPlayButton: true,
      };
    }
    render() {
      const { data } = this.props;
      return (
      // Parameters are infinite sliding, fullscreen, thumbnails, navigation
        <ImageGallery
          items={data}
          showPlayButton={this.state.showPlayButton}
          onSlide={this.onSlide}
          showFullscreenButton={this.state.showFullscreenButton}
        />
      );
    }
}
