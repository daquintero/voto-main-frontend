import PropTypes from 'prop-types';

// TODO FIND ORIGIN OF FAILED PROP TYPE OF CARD GRID
// ---------- CARD PROPS -----------------------
export const CardPropTypes = {
  objIn: PropTypes.shape({
    id: PropTypes.number,
    size: PropTypes.string,
    title: PropTypes.string,
    // Note that this is the submission date
    date: PropTypes.instanceOf(Date),
    // We only need one image.
    images: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
    })),
    // We only need one statistic for ISCard
    statistics: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
    })),
  }),
};

export const CardDefaultPropTypes = {
  objIn: {
    id: 0,
    size: 'full',
    title: '',
    date: new Date(),
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


// ---------------- CARD GRID PROPS -----------------

export const CardGridPropTypes = {
  info: PropTypes.arrayOf(CardPropTypes),
};

export const CardGridDefaultPropTypes = [
  CardDefaultPropTypes, CardDefaultPropTypes, CardDefaultPropTypes];
