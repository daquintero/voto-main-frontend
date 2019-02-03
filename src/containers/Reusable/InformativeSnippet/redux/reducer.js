import { GET_RECENT_INFORMATIVE_SNIPPETS } from './actionCreators';
import { initializeActions, actionResult } from '../../../App/redux-utils';

// Initial State for snippets
const initialState = {
  recentInformativeSnippets: {},
  actions: initializeActions([
    'GET_RECENT_INFORMATIVE_SNIPPETS',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECENT_INFORMATIVE_SNIPPETS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RECENT_INFORMATIVE_SNIPPETS.REQUEST'),
        },
      };
    case GET_RECENT_INFORMATIVE_SNIPPETS.SUCCESS: {
      return {
        ...state,
        recentInformativeSnippets:
          [...state.informativeSnippets.recentInformativeSnippets, action.recentInformativeSnippets],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RECENT_INFORMATIVE_SNIPPETS.SUCCESS'),
        },
      };
    }
    case GET_RECENT_INFORMATIVE_SNIPPETS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RECENT_INFORMATIVE_SNIPPETS', { error: action.error }),
        },
      };
    default:
      return state;
  }
}
