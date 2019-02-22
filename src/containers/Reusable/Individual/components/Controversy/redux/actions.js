/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_CONTROVERSIES,
} from './actionCreators';
import individualService from '../../../individual-service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedControversies = (apiQueryData) => (dispatch) => {
  dispatch({
    type: GET_RELATED_CONTROVERSIES.REQUEST,
  });
  return individualService.get.relatedControversies(apiQueryData).then(
    response => dispatch({
      type: GET_RELATED_CONTROVERSIES.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      relatedControversies: response.data,
    }),
    error => dispatch({
      type: GET_RELATED_CONTROVERSIES.ERROR,
      error,
    }),
  );
};
