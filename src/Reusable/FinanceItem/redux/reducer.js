import {
  GET_RELATED_FINANCE_ITEMS,
  GET_CORRUPTION_FUNDS,
  GET_NON_CORRUPTION_FUNDS,
  GET_ALL_FUNDS,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';

// Initial State for Finance Items
const initialState = {
  relatedFinanceItems: {},
  subsetNumber: 0,
  modalFunds: {},
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
    case GET_CORRUPTION_FUNDS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_CORRUPTION_FUNDS.REQUEST'),
        },
      };
    case GET_CORRUPTION_FUNDS.SUCCESS:
      return {
        ...state,
        modalFunds: action.modalFunds,
        actions: {
          ...state.actions,
          ...actionResult('GET_CORRUPTION_FUNDS.SUCCESS'),
        },
      };
    case GET_CORRUPTION_FUNDS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_CORRUPTION_FUNDS.ERROR', { error: action.error }),
        },
      };
    case GET_NON_CORRUPTION_FUNDS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_NON_CORRUPTION_FUNDS.REQUEST'),
        },
      };
    case GET_NON_CORRUPTION_FUNDS.SUCCESS:
      return {
        ...state,
        modalFunds: action.modalFunds,
        actions: {
          ...state.actions,
          ...actionResult('GET_NON_CORRUPTION_FUNDS.SUCCESS'),
        },
      };
    case GET_NON_CORRUPTION_FUNDS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_NON_CORRUPTION_FUNDS.ERROR', { error: action.error }),
        },
      };
    case GET_ALL_FUNDS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_ALL_FUNDS.REQUEST'),
        },
      };
    case GET_ALL_FUNDS.SUCCESS:
      return {
        ...state,
        modalFunds: action.modalFunds,
        actions: {
          ...state.actions,
          ...actionResult('GET_ALL_FUNDS.SUCCESS'),
        },
      };
    case GET_ALL_FUNDS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_ALL_FUNDS.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

