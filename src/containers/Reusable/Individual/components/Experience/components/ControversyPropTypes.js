import PropTypes from 'prop-types';

// ---------- CARD PROPS -----------------------
export const CardPropTypes = {
  objIn: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    briefDescription: PropTypes.string,
    source: PropTypes.string,
  }),
};

export const CardDefaultPropTypes = {
  objIn: {
    id: 0,
    type: '',
    briefDescription: '',
    source: '',
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

