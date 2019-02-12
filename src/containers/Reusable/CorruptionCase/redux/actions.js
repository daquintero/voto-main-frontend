import {
  GET_RELATED_CORRUPTION_CASES,
  GET_BASIC_CORRUPTION_CASE_PAGE,
} from './actionCreators';
import corruptionCaseService from '../corruption-case-service';

// --------------- PAGE --------------
// Basic Corruption Case Page detailed action that gets the basic fields for the parentID
export const getBasicCorruptionCasePage = (parentId) => (dispatch) => {
  dispatch({
    type: GET_BASIC_CORRUPTION_CASE_PAGE.REQUEST,
  });
  // TODO FINISH WRITING
  return corruptionCaseService.get.basicCorruptionCasePage(parentId).then(
    response => dispatch({
      type: GET_BASIC_CORRUPTION_CASE_PAGE.SUCCESS,
      basicCorruptionCasePage: response.data,
    }),
    error => dispatch({
      type: GET_BASIC_CORRUPTION_CASE_PAGE.ERROR,
      error,
    }),
  );
};


// ------------- RELATIONSHIPS --------------
// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedCorruptionCases = (subsetNumber, parentClass, parentId) => (dispatch) => {
  dispatch({
    type: GET_RELATED_CORRUPTION_CASES.REQUEST,
  });
  return corruptionCaseService.get.relatedCorruptionCases(subsetNumber, parentClass, parentId).then(
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



