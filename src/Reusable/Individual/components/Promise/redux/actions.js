/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_PROMISES,
} from './actionCreators';
import service from '../../../service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedPromises = apiQueryData => (dispatch) => {
  dispatch({
    type: GET_RELATED_PROMISES.REQUEST,
  });
  return service.get.relatedPromises(apiQueryData).then(
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
