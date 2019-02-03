import PropTypes from 'prop-types';

export const PageProps = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(PropTypes.shape({
    embedUrlSrc: PropTypes.string,
  })),
  images: PropTypes.arrayOf(PropTypes.shape({
    image: '',
  })),
  statistics: PropTypes.arrayOf(PropTypes.shape({ // We only need one statistic
    link: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.string,
  })),
  organizations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    logo: PropTypes.shape({
      logo: PropTypes.string,
    }),
  })),
  individuals: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      image: '', // only one is needed
    })),
  })),
  corruptionCases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      image: '', // only one is needed
    })),
    statistics: PropTypes.arrayOf(PropTypes.shape({ // We only need 3 statistic
      link: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
    })),
  })),
  informativeSnippets: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
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
  })),
};

export const CardPropTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
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
