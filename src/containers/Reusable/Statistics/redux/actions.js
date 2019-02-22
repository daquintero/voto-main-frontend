/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_STATISTICS,
} from './actionCreators';
import statisticsService from '../statistics-service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedStatistics = apiQueryData => (dispatch) => {
  dispatch({
    type: GET_RELATED_STATISTICS.REQUEST,
  });
  return statisticsService.get.relatedStatistics(apiQueryData).then(
    response => dispatch({
      type: GET_RELATED_STATISTICS.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      statistics: response.data.relatedStatistics,
    }),
    error => dispatch({
      type: GET_RELATED_STATISTICS.ERROR,
      error,
    }),
  );
};
