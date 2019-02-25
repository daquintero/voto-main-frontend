/* eslint-disable */
// Images Prop Types

// PropTypes
import PropTypes from 'prop-types';

// ------------ VIGALLERY PROPTYPES --------------
export const VIGalleryPropTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      original: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      briefDescription: PropTypes.string.isRequired,
    })),
};

export const VIGalleryDefaultProps = {
  data: [],
};
