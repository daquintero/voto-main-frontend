/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_FINANCE_ITEMS,
  GET_CORRUPTION_FUNDS,
  GET_NON_CORRUPTION_FUNDS,
  GET_ALL_FUNDS,
} from './actionCreators';
import service from '../service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedFinanceItems = apiQueryData => (dispatch) => {
  dispatch({
    type: GET_RELATED_FINANCE_ITEMS.REQUEST,
  });
  return service.get.relatedFinanceItems(apiQueryData).then(
    response => dispatch({
      type: GET_RELATED_FINANCE_ITEMS.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      relatedFinanceItems: response.data.relatedFinanceItems,
    }),
    error => dispatch({
      type: GET_RELATED_FINANCE_ITEMS.ERROR,
      error,
    }),
  );
};

// Corruption Related Funds for a Parent ID and Parent Model
export const getCorruptionFunds = apiQueryData => (dispatch) => {
  dispatch({
    type: GET_CORRUPTION_FUNDS.REQUEST,
  });
  return service.get.corruptionFunds(apiQueryData).then(
    response => dispatch({
      type: GET_CORRUPTION_FUNDS.SUCCESS,
      modalFunds: response.data,
    }),
    error => dispatch({
      type: GET_CORRUPTION_FUNDS.ERROR,
      error,
    }),
  );
};


// NON Corruption Related Funds for a Parent ID and Parent Model
export const getNonCorruptionFunds = apiQueryData => (dispatch) => {
  dispatch({
    type: GET_NON_CORRUPTION_FUNDS.REQUEST,
  });
  return service.get.nonCorruptionFunds(apiQueryData).then(
    response => dispatch({
      type: GET_NON_CORRUPTION_FUNDS.SUCCESS,
      modalFunds: response.data,
    }),
    error => dispatch({
      type: GET_NON_CORRUPTION_FUNDS.ERROR,
      error,
    }),
  );
};

// ALL Corruption Related Funds for a Parent ID and Parent Model
export const getAllFunds = apiQueryData => (dispatch) => {
  dispatch({
    type: GET_ALL_FUNDS.REQUEST,
  });
  return service.get.allFunds(apiQueryData).then(
    response => dispatch({
      type: GET_ALL_FUNDS.SUCCESS,
      modalFunds: response.data,
    }),
    error => dispatch({
      type: GET_ALL_FUNDS.ERROR,
      error,
    }),
  );
};
