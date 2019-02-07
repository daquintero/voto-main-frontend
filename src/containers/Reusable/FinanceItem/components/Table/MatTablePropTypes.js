// ----- IMPORTS ----
import PropTypes from 'prop-types';

// -------------------- INDEX --------------------------

export const MatTablePropTypes = {
  // Contains all data and headers for MatTable
  field: PropTypes.instanceOf(Object).isRequired,
};

export const MatTableDefaultPropTypes = {};

// -------------------- MatTable HEAD ---------------------

export const MatTableHeadPropTypes = {
  rows: PropTypes.instanceOf(Array).isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};
