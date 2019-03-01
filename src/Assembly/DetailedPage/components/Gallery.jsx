// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import VIGallery from '../../../Reusable/Images/components/VIGallery';


class Gallery extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      imagesArray: [],
    };
  }
  componentDidMount() {
    this.parseImages();
  }

  parseImages = () => {
    const { images } = this.props.instance.media;
    const parsedImages = images.slice(2).map(image => image.galleryObj);
    this.setState(({ imagesArray: parsedImages }));
  };

  render() {
    const {
      imagesArray,
    } = this.state;

    return (
      <div className="p-4">
        <VIGallery instances={imagesArray} />
      </div>
    );
  }
}

export default Gallery;
