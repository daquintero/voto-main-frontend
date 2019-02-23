/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_INDIVIDUALS,
} from './actionCreators';
import service from '../service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedIndividuals = (apiQueryData) => (dispatch) => {
  dispatch({
    type: GET_RELATED_INDIVIDUALS.REQUEST,
  });
  return service.get.relatedIndividuals(apiQueryData).then(
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
