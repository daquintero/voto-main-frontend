import PropTypes from 'prop-types';
// TODO finish the Prop Types for page
export const PageProps = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    })),
    videos: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      embedUrlSrc: PropTypes.string,
    })),
    statistics: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
      link: PropTypes.string,
    })),
    individuals: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
    })),
    date: PropTypes.instanceOf(Date).isRequired,
  }),
};


export const CardPropTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({ // We only need one image.
      image: PropTypes.string,
    })),
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
