/* eslint-disable */
// Libraries
import React, { PureComponent } from 'react';

// Prop Types
import { VIGalleryPropTypes, VIGalleryDefaultProps } from '../../../Images/components/ImagesPropTypes';

// Components
import VIGallery from '../../../Images/components/VIGallery';

// TODO REMOVE TEST DATA
import { galleryData } from '../SampleDataFullPage';

// Declaration
class Gallery extends PureComponent {
  static propTypes = VIGalleryPropTypes;
  static defaultProps = VIGalleryDefaultProps;

  render() {
    // const { data } = this.props;
    return (
      <VIGallery data={galleryData} />
    );
  }
}

// TODO State Store Connection
export default Gallery;

