/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_PROMISES,
} from './actionCreators';
import individualService from '../../../individual-service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedPromises = (subsetNumber, parentIndividualId) => (dispatch) => {
  dispatch({
    type: GET_RELATED_PROMISES.REQUEST,
  });
  return individualService.get.relatedPromises(subsetNumber, parentIndividualId).then(
    response => dispatch({
      type: GET_RELATED_PROMISES.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      relatedPromises: response.data,
    }),
    error => dispatch({
      type: GET_RELATED_PROMISES.ERROR,
      error,
    }),
  );
};
