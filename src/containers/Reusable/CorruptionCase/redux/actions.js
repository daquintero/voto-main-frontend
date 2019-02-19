/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_CORRUPTION_CASES,
} from './actionCreators';
import corruptionCaseService from '../corruption-case-service';


// ------------- RELATIONSHIPS --------------
// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedCorruptionCases = (subsetNumber, modelLabel, parentId) => (dispatch) => {
  dispatch({
    type: GET_RELATED_CORRUPTION_CASES.REQUEST,
  });
  return corruptionCaseService.get.relatedCorruptionCases(subsetNumber, modelLabel, parentId).then(
    response => dispatch({
      type: GET_RELATED_CORRUPTION_CASES.SUCCESS,
      subsetNumber: response.data,
      relatedCorruptionCases: response.data.relatedCorruptionCases,
    }),
    error => dispatch({
      type: GET_RELATED_CORRUPTION_CASES.ERROR,
      error,
    }),
  );
};

