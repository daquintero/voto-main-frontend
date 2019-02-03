import PropTypes from 'prop-types';

export const CardPropTypes = {
  position: PropTypes.string,
  info: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({ // We only need one image.
      image: PropTypes.string,
    })),
    date: PropTypes.instanceOf(Date).isRequired, // Note that this is the submission date
    statistics: PropTypes.arrayOf(PropTypes.shape({ // We only need one statistic
      link: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
    })),
  }),
};

export const CardDefaultPropTypes = {
  position: 'left',
  info: {
    title: '',
    images: [{
      image: '',
    }],
    statistics: [{
      link: '',
      title: '',
      data: '',
      icon: '',
    }],
  },
};
