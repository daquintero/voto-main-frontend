import { GET_RELATED_EXPERIENCE } from './actionCreators';
import { initializeActions, actionResult } from '../../../../../App/utils';

// Initial State for Experience
const initialState = {
  relatedExperience: {},
  subsetNumber: 0,
  actions: initializeActions([
    'GET_RELATED_EXPERIENCE',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RELATED_EXPERIENCE.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_EXPERIENCE.REQUEST'),
        },
      };
    case GET_RELATED_EXPERIENCE.SUCCESS:
      return {
        ...state,
        relatedExperience:
          [...state.openPage.individual.relatedExperience, action.relatedExperience],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_EXPERIENCE.SUCCESS'),
        },
      };
    case GET_RELATED_EXPERIENCE.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_EXPERIENCE.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

