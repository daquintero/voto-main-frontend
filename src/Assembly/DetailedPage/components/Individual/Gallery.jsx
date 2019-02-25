// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import VIGallery from '../../../../Reusable/Images/components/VIGallery';


class Gallery extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const {
      instance,
    } = this.props;

    return (
      <VIGallery images={instance.images} />
    );
  }
}

export default Gallery;
