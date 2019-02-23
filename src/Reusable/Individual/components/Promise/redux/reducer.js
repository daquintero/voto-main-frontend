import { GET_RELATED_PROMISES } from './actionCreators';
import { initializeActions, actionResult } from '../../../../shared/utils/asyncHelpers';

// Initial State for Promises
const initialState = {
  relatedPromises: {},
  subsetNumber: 0,
  actions: initializeActions([
    'GET_RELATED_PROMISES',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RELATED_PROMISES.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_PROMISES.REQUEST'),
        },
      };
    case GET_RELATED_PROMISES.SUCCESS:
      return {
        ...state,
        relatedPromises:
          [...state.openPage.individual.relatedPromises, action.relatedPromises],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_PROMISES.SUCCESS'),
        },
      };
    case GET_RELATED_PROMISES.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_PROMISES.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

