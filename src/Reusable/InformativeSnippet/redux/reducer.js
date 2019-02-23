import {
  GET_RECENT_INFORMATIVE_SNIPPETS,
  GET_RELATED_INFORMATIVE_SNIPPETS,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';

// Initial State for snippets
const initialState = {
  recentInformativeSnippets: {},
  relatedInformativeSnippets: {},
  subsetNumber: 0,
  actions: initializeActions([
    'GET_RECENT_INFORMATIVE_SNIPPETS',
    'GET_RELATED_INFORMATIVE_SNIPPETS',
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
    case GET_RECENT_INFORMATIVE_SNIPPETS.SUCCESS:
      return {
        ...state,
        recentInformativeSnippets:
          [...state.openPage.informativeSnippet.recentInformativeSnippets, action.recentInformativeSnippets],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RECENT_INFORMATIVE_SNIPPETS.SUCCESS'),
        },
      };
    case GET_RECENT_INFORMATIVE_SNIPPETS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RECENT_INFORMATIVE_SNIPPETS.ERROR', { error: action.error }),
        },
      };
    case GET_RELATED_INFORMATIVE_SNIPPETS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_INFORMATIVE_SNIPPETS.REQUEST'),
        },
      };
    case GET_RELATED_INFORMATIVE_SNIPPETS.SUCCESS:
      return {
        ...state,
        relatedInformativeSnippets:
          [...state.openPage.informativeSnippet.relatedInformativeSnippets, action.relatedInformativeSnippets],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_INFORMATIVE_SNIPPETS.SUCCESS'),
        },
      };
    case GET_RELATED_INFORMATIVE_SNIPPETS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_INFORMATIVE_SNIPPETS.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}
