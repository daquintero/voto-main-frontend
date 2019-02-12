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
        showVideo: { url: '', show: false },
      };
    }

    componentDidMount() {
      const correctedData = this.props.data.filter(obj => obj.embedUrl);
    }

    onSlide = () => {
      this.resetVideo();
    };

    resetVideo() {
      this.setState({ showVideo: {} });

      // Back to image view
      if (this.state.showFullscreenButton) {
        this.setState({ showFullscreenButton: true });
      }
    }

    toggleShowVideo(url) {
      const showVideo = { url, show: !this.state.showVideo.show };
      this.setState({ showVideo });

      if (this.state.showVideo.show) {
        this.setState({
          showPlayButton: false,
          showFullscreenButton: false,
        });
      }
    }

    // TODO Test if more than one video works on this.
    renderVideo(item) {
      return (
        <div className="image-gallery-image">
          {this.state.showVideo.show ? (
            <div className="video-wrapper">
              <button className="close-video" onClick={this.toggleShowVideo(item.embedUrl)} />
              <iframe title={item.description} src={this.state.showVideo.url} frameBorder="0" allowFullScreen />
            </div>
              ) : (
                <button onClick={this.toggleShowVideo(item.embedUrl)}>
                  <div className="play-button" />
                  <img src={item.original} alt="Error" />
                </button>
              )}
        </div>
      );
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
