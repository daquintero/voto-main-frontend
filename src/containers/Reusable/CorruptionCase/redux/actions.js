import {
  GET_RELATED_CORRUPTION_CASES,
  GET_DETAILED_CORRUPTION_CASE_PAGE,
} from './actionCreators';
import corruptionCaseService from '../corruption-case-service';

// --------------- PAGE --------------
// Basic Corruption Case Page detailed action that gets the basic fields for the parentID
export const getDetailedCorruptionCasePage = parentId => (dispatch) => {
  dispatch({
    type: GET_DETAILED_CORRUPTION_CASE_PAGE.REQUEST,
  });
  return corruptionCaseService.get.detailedCorruptionCasePage(parentId).then(
    response => dispatch({
      type: GET_DETAILED_CORRUPTION_CASE_PAGE.SUCCESS,
      detailedCorruptionCasePage: response.data,
    }),
    error => dispatch({
      type: GET_DETAILED_CORRUPTION_CASE_PAGE.ERROR,
      error,
    }),
  );
};


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

