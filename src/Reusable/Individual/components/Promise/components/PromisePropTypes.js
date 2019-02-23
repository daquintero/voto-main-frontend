import PropTypes from 'prop-types';

// ---------- CARD PROPS -----------------------
export const CardPropTypes = {
  objIn: PropTypes.shape({
    size: PropTypes.string,
    id: PropTypes.number,
    type: PropTypes.string,
    briefDescription: PropTypes.string,
    fulfilled: PropTypes.boolean,
    source: PropTypes.string,
  }),
};

export const CardDefaultPropTypes = {
  objIn: {
    size: 'full',
    id: 0,
    type: '',
    briefDescription: '',
    fulfilled: false,
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

