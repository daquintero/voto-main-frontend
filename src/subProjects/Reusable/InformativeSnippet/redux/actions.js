import {
  GET_RECENT_INFORMATIVE_SNIPPETS,
  GET_RELATED_INFORMATIVE_SNIPPETS,
} from './actionCreators';
import service from '../service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRecentInformativeSnippets = subsetNumber => (dispatch) => {
  dispatch({
    type: GET_RECENT_INFORMATIVE_SNIPPETS.REQUEST,
  });
  return service.get.recentInformativeSnippets(subsetNumber).then(
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
export const getRelatedInformativeSnippets = (apiQueryData) => (dispatch) => {
  dispatch({
    type: GET_RELATED_INFORMATIVE_SNIPPETS.REQUEST,
  });
  return service.get.relatedInformativeSnippets(apiQueryData).then(
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
