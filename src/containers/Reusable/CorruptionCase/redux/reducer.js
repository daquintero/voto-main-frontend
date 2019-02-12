import {
  GET_RELATED_CORRUPTION_CASES,
  GET_BASIC_CORRUPTION_CASE_PAGE,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../App/utils';

// Initial State for Corruption Cases
const initialState = {
  relatedCorruptionCases: {},
  basic: {},
  actions: initializeActions([
    'GET_RELATED_CORRUPTION_CASES',
    'GET_BASIC_CORRUPTION_CASE_PAGE',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BASIC_CORRUPTION_CASE_PAGE.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_BASIC_CORRUPTION_CASE_PAGE.REQUEST'),
        },
      };
    case GET_BASIC_CORRUPTION_CASE_PAGE.SUCCESS:
      return {
        ...state,
        page: action.basicCorruptionCasePage,
        actions: {
          ...state.actions,
          ...actionResult('GET_BASIC_CORRUPTION_CASE_PAGE.SUCCESS'),
        },
      };
    case GET_BASIC_CORRUPTION_CASE_PAGE.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_BASIC_CORRUPTION_CASE_PAGE.ERROR', { error: action.error }),
        },
      };

    // ------------ RELATIONSHIPS -----------------
    case GET_RELATED_CORRUPTION_CASES.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_CORRUPTION_CASES.REQUEST'),
        },
      };
    case GET_RELATED_CORRUPTION_CASES.SUCCESS:
      return {
        ...state,
        relatedCorruptionCases:
          [...state.openPage.corruptionCase.relatedCorruptionCases, action.relatedCorruptionCases],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_CORRUPTION_CASES.SUCCESS'),
        },
      };
    case GET_RELATED_CORRUPTION_CASES.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_CORRUPTION_CASES.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

