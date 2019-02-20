// Gallery
// Libraries
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// Prop Types
import { VIGalleryPropTypes, VIGalleryDefaultProps } from '../../../../Reusable/Images/components/ImagesPropTypes';

// Components
import VIGallery from '../../../../Reusable/Images/components/VIGallery';

// Declaration
class Gallery extends PureComponent {
  static propTypes = VIGalleryPropTypes;
  static defaultProps = VIGalleryDefaultProps;

  render() {
    const { data } = this.props;
    return (
      <div className="bg-white">
        <VIGallery data={data} />
      </div>
    );
  }
}

export default connect(state => ({
  // Basic CorruptionCase information
  data: state.openPage.images,
}))(Gallery);
