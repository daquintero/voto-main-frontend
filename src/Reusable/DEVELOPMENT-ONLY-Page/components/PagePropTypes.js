import PropTypes from 'prop-types';

// EXTERNAL PROP TYPES IMPORTS

// TODO Refactor CorruptionCase Props into each separate section

// TODO do something with Statistics and Finance
// import { mainFinanceListPropTypes } from '../../../../FinanceItem/components/FinanceItemPropTypes';

// ------------------ PAGE PROPS -------------------
export const RelationshipProps = {
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

// ------------------------ HEADER PROP TYPES -------------------
export const headerPropTypes = {
  basic: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
  }),
};

export const headerDefaultProps = {
  basic: {
    title: '',
    description: '',
    longDescription: '',
  },
};


// TODO Define CorruptionCase Default Props
