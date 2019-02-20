import {
  GET_RELATED_CORRUPTION_CASES,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../App/utils';

// Initial State for Corruption Cases
const initialState = {
  relatedCorruptionCases: {},
  actions: initializeActions([
    'GET_RELATED_CORRUPTION_CASES',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
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

