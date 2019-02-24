import PropTypes from 'prop-types';


// TODO FIND ORIGIN OF FAILED PROP TYPE OF CARD GRID
// ---------- CARD PROPS -----------------------
export const CardPropTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
};


// ---------------- CARD GRID PROPS -----------------
export const CardGridPropTypes = {
  instances: PropTypes.arrayOf(CardPropTypes),
};


// --------------- DETAILED REDUX CARD GRID ---------------
export const DetailedReduxCardGridPropTypes = {
  parentId: PropTypes.number,
  modelLabel: PropTypes.string,
  subsetNumber: PropTypes.number,
  instances: CardGridPropTypes,
};
