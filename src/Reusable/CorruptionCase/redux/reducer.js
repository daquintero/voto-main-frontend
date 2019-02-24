import {
  GET_RELATED_CORRUPTION_CASES,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';


const initialState = {
  instances: [],
  subsetNumber: 0,
  actions: initializeActions([
    'GET_MORE_RELATED_CORRUPTION_CASES',
  ]),
};


export default function (state = initialState, action) {
  switch (action.type) {
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
        instances: action.response.instances,
        subsetNumber: action.response.subsetNumber,
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

