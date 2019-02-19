// Finance Item Prop Types

// PropTypes
import PropTypes from 'prop-types';

// ----------- FINANCE ITEM PROPTYPES ----------
export const financeItemPropTypes = {
  title: PropTypes.string.isRequired,
  briefDescription: PropTypes.string,
  amount: PropTypes.number.isRequired,
  corruptionRelated: PropTypes.bool.isRequired,
};

export const financeItemDefaultProps = {
  title: '',
  briefDescription: '',
  amount: 0,
  corruptionRelated: false,
};

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
// TODO CONNECT TO ACTION/REDUCER
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

export const mainFinanceListDefaultProps = {
  corruptionRelatedFunds: 0,
  nonCorruptionRelatedFunds: 0,
};
