import PropTypes from 'prop-types';

// ---------- CARD PROPS -----------------------
export const CardPropTypes = {
  objIn: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
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
      id: PropTypes.number,
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
      id: 0,
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


// --------------- DETAILED REDUX CARD GRID ---------------

export const DetailedReduxCardGridPropTypes = {
  parentId: PropTypes.number,
  modelLabel: PropTypes.string,
  subsetNumber: PropTypes.number,
  relatedCorruptionCases: CardGridPropTypes,
};
