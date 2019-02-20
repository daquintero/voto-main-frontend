import {
  GET_DETAILED_PAGE,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../App/utils';

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
    case GET_DETAILED_PAGE.SUCCESS:
      return {
        ...state,
        basic: action.basic,
        actions: {
          ...state.actions,
          ...actionResult('GET_DETAILED_PAGE.SUCCESS'),
        },
      };
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
