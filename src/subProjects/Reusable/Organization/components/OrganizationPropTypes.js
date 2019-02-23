import PropTypes from 'prop-types';

// ---------- CARD PROPS -----------------------
export const CardPropTypes = {
  objIn: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    size: PropTypes.string,
    name: PropTypes.string,
    alias: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
    })),
  }),
};

export const CardDefaultPropTypes = {
  objIn: {
    id: 0,
    size: 'full',
    name: '',
    alias: '',
    date: new Date(),
    images: [{
      image: '',
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
  relatedIndividuals: CardGridPropTypes,
};

