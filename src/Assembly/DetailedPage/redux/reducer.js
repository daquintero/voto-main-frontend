import {
  GET_DETAILED_PAGE,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';

// Initial State for Detailed CorruptionCase
const initialState = {
  basic: {},
  actions: initializeActions([
    'GET_DETAILED_PAGE',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DETAILED_PAGE.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_DETAILED_PAGE.REQUEST'),
        },
      };
    case GET_DETAILED_PAGE.SUCCESS: {
      return {
        ...state,
        parentInstance: action.response.instance,
        relatedInstances: {
          ...action.response.relatedInstances,
        },
        actions: {
          ...state.actions,
          ...actionResult('GET_DETAILED_PAGE.SUCCESS'),
        },
      };
    }
    case GET_DETAILED_PAGE.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_DETAILED_PAGE.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

