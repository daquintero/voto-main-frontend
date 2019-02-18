/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_INDIVIDUALS,
} from './actionCreators';
import individualService from '../individual-service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedIndividuals = (subsetNumber, modelLabel, parentId) => (dispatch) => {
  dispatch({
    type: GET_RELATED_INDIVIDUALS.REQUEST,
  });
  return individualService.get.relatedIndividuals(subsetNumber, modelLabel, parentId).then(
    response => dispatch({
      type: GET_RELATED_INDIVIDUALS.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      relatedIndividuals: response.data.relatedIndividuals,
    }),
    error => dispatch({
      type: GET_RELATED_INDIVIDUALS.ERROR,
      error,
    }),
  );
};
