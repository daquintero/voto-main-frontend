import PropTypes from 'prop-types';

// ---------- CARD PROPS -----------------------
export const CardPropTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    // We only need one image.
    images: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
    })),
    // Note that this is the submission date
    date: PropTypes.instanceOf(Date),
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
  position: 'left',
  info: {
    title: '',
    images: [{
      image: '',
    }],
    date: new Date(),
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
