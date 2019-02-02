import PropTypes from 'prop-types';

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

// TODO finish the Prop Types
