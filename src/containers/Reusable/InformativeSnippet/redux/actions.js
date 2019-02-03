/* eslint-disable import/prefer-default-export */
// TODO ADD FULL
import { GET_RECENT_INFORMATIVE_SNIPPETS } from './actionCreators';
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
