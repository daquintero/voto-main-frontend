import { GET_RELATED_CONTROVERSIES } from './actionCreators';
import { initializeActions, actionResult } from '../../../../shared/utils/asyncHelpers';

// Initial State for Controversies
const initialState = {
  relatedControversies: {},
  subsetNumber: 0,
  actions: initializeActions([
    'GET_RELATED_CONTROVERSIES',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RELATED_CONTROVERSIES.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_CONTROVERSIES.REQUEST'),
        },
      };
    case GET_RELATED_CONTROVERSIES.SUCCESS:
      return {
        ...state,
        relatedControversies:
          [...state.openPage.individual.relatedControversies, action.relatedControversies],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_CONTROVERSIES.SUCCESS'),
        },
      };
    case GET_RELATED_CONTROVERSIES.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_CONTROVERSIES.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

