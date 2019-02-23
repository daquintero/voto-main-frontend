/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_CORRUPTION_CASES,
} from './actionCreators';
import service from '../service';


// ------------- RELATIONSHIPS --------------
// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedCorruptionCases = apiQueryData => (dispatch) => {
  dispatch({
    type: GET_RELATED_CORRUPTION_CASES.REQUEST,
  });
  return service.get.relatedCorruptionCases(apiQueryData).then(
    response => dispatch({
      type: GET_RELATED_CORRUPTION_CASES.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      relatedCorruptionCases: response.data.relatedCorruptionCases,
    }),
    error => dispatch({
      type: GET_RELATED_CORRUPTION_CASES.ERROR,
      error,
    }),
  );
};

