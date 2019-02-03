import { GET_RELATED_INDIVIDUALS } from './actionCreators';
import { initializeActions, actionResult } from '../../../App/utils';

// Initial State for snippets
const initialState = {
  relatedIndividuals: {},
  actions: initializeActions([
    'GET_RELATED_INDIVIDUALS',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RELATED_INDIVIDUALS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_INDIVIDUALS.REQUEST'),
        },
      };
    case GET_RELATED_INDIVIDUALS.SUCCESS:
      return {
        ...state,
        relatedIndividuals:
          [...state.openPage.individual.relatedIndividuals, action.relatedIndividuals],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_INDIVIDUALS.SUCCESS'),
        },
      };
    case GET_RELATED_INDIVIDUALS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_INDIVIDUALS.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

