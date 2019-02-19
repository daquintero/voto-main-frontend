// Gallery
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Prop Types
import { VIGalleryPropTypes, VIGalleryDefaultProps } from '../../../Images/components/ImagesPropTypes';

// Components
import VIGallery from '../../../Images/components/VIGallery';

// Declaration
class Gallery extends PureComponent {
  static propTypes = VIGalleryPropTypes;
  static defaultProps = VIGalleryDefaultProps;

  render() {
    const { data } = this.props;
    return (
      <VIGallery data={data} />
    );
  }
}

export default connect(state => ({
  // Basic Page information
  data: state.openPage.images,
}))(Gallery);
