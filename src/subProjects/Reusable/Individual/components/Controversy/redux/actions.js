/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_CONTROVERSIES,
} from './actionCreators';
import service from '../../../service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedControversies = (apiQueryData) => (dispatch) => {
  dispatch({
    type: GET_RELATED_CONTROVERSIES.REQUEST,
  });
  return service.get.relatedControversies(apiQueryData).then(
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
