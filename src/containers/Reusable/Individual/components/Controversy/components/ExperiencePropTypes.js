import PropTypes from 'prop-types';

// ---------- CARD PROPS -----------------------
export const CardPropTypes = {
  objIn: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    organization: PropTypes.string,
  }),
};

export const CardDefaultPropTypes = {
  objIn: {
    id: 0,
    title: '',
    type: '',
    description: '',
    organization: '',
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

