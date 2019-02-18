// Finance Item Prop Types

// PropTypes
import PropTypes from 'prop-types';

// ------------ FINANCE MODAL PROPTYPES --------------
export const financeModalPropTypes = {
  // Any custom subcomponents
  children: PropTypes.node,

  // Redux Actions
  dispatch: PropTypes.func.isRequired,
  subsetNumber: PropTypes.number.isRequired,
  // TODO Add related Financial Items
  action: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  }),

  // Parent component information
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  modelLabel: PropTypes.string.isRequired,
};

export const financeModalDefaultProps = {
  children: null,
  action: {
    loading: false,
    loaded: false,
    error: false,
  },
};


// ----------- FINANCE LIST PROPTYPES -------------

export const mainFinanceListPropTypes = {
  corruptionRelatedFunds: PropTypes.number,
  nonCorruptionRelatedFunds: PropTypes.number,
};
