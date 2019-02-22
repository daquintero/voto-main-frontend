import { GET_RELATED_STATISTICS } from './actionCreators';
import { initializeActions, actionResult } from '../../../../shared/utils/asyncHelpers';

// Initial State for Statistics
const initialState = {
  statistics: {},
  actions: initializeActions([
    'GET_RELATED_STATISTICS',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RELATED_STATISTICS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_STATISTICS.REQUEST'),
        },
      };
    case GET_RELATED_STATISTICS.SUCCESS:
      return {
        ...state,
        statistics:
          [...state.openPage.statistics, action.statistics],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_STATISTICS.SUCCESS'),
        },
      };
    case GET_RELATED_STATISTICS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_STATISTICS.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

