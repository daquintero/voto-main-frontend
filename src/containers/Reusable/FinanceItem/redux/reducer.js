import { GET_RELATED_FINANCE_ITEMS } from './actionCreators';
import { initializeActions, actionResult } from '../../../App/utils';

// Initial State for Finance Items
const initialState = {
  relatedFinanceItems: {},
  subsetNumber: 0,
  actions: initializeActions([
    'GET_RELATED_FINANCE_ITEMS',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RELATED_FINANCE_ITEMS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_FINANCE_ITEMS.REQUEST'),
        },
      };
    case GET_RELATED_FINANCE_ITEMS.SUCCESS:
      return {
        ...state,
        relatedFinanceItems:
          [...state.openPage.financeItem.relatedFinanceItems, action.relatedFinanceItems],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_FINANCE_ITEMS.SUCCESS'),
        },
      };
    case GET_RELATED_FINANCE_ITEMS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_FINANCE_ITEMS.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

