import {
  GET_RECENT_INFORMATIVE_SNIPPETS,
  GET_RELATED_INFORMATIVE_SNIPPETS,
} from './actionCreators';
import snippetService from '../snippet-service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRecentInformativeSnippets = subsetNumber => (dispatch) => {
  dispatch({
    type: GET_RECENT_INFORMATIVE_SNIPPETS.REQUEST,
  });
  return snippetService.get.recentInformativeSnippets(subsetNumber).then(
    response => dispatch({
      type: GET_RECENT_INFORMATIVE_SNIPPETS.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      recentInformativeSnippets: response.data.recentInformativeSnippets,
    }),
    error => dispatch({
      type: GET_RECENT_INFORMATIVE_SNIPPETS.ERROR,
      error,
    }),
  );
};


// This function inputs the parent relation and the backend returns the informative snippeets
export const getRelatedInformativeSnippets = (subsetNumber, parentClass, parentId) => (dispatch) => {
  dispatch({
    type: GET_RELATED_INFORMATIVE_SNIPPETS.REQUEST,
  });
  return snippetService.get.relatedInformativeSnippets(subsetNumber, parentClass, parentId).then(
    response => dispatch({
      type: GET_RELATED_INFORMATIVE_SNIPPETS.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      relatedInformativeSnippets: response.data.relatedInformativeSnippets,
    }),
    error => dispatch({
      type: GET_RELATED_INFORMATIVE_SNIPPETS.ERROR,
      error,
    }),
  );
};
