// Custom implementation of React-Image-Gallery
// --------------- IMPORTS --------------------
import React, { PureComponent } from 'react';
import ImageGallery from 'react-image-gallery';

// PropTypes
import { VIGalleryPropTypes, VIGalleryDefaultProps } from './ImagesPropTypes';

// TODO Note that backend object has to match this.
export default class VIGallery extends PureComponent {
    static propTypes = VIGalleryPropTypes;
    static defaultProps = VIGalleryDefaultProps;

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
        <>
          {data[0] ? (
            <ImageGallery
              items={data}
              showPlayButton={this.state.showPlayButton}
              onSlide={this.onSlide}
              showFullscreenButton={this.state.showFullscreenButton}
            />
          ) : null}
        </>
      );
    }
}
