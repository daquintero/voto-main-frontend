/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_FINANCE_ITEMS,
} from './actionCreators';
import financeItemService from '../finance-item-service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedFinanceItems = (subsetNumber, modelLabel, parentId) => (dispatch) => {
  dispatch({
    type: GET_RELATED_FINANCE_ITEMS.REQUEST,
  });
  return financeItemService.get.relatedFinanceItems(subsetNumber, modelLabel, parentId).then(
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
