import PropTypes from 'prop-types';

// ---------- CARD PROPS -----------------------
export const CardPropTypes = PropTypes.instanceOf(Object).isRequired;


// ---------------- CARD GRID PROPS -----------------
export const CardGridPropTypes = {
  info: PropTypes.arrayOf(CardPropTypes),
};

// --------------- DETAILED REDUX CARD GRID ---------------
export const DetailedReduxCardGridPropTypes = {
  parentId: PropTypes.number,
  modelLabel: PropTypes.string,
  subsetNumber: PropTypes.number,
  instances: CardGridPropTypes,
};

