/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_EXPERIENCE,
} from './actionCreators';
import individualService from '../../../individual-service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedExperience = (subsetNumber, parentIndividualId) => (dispatch) => {
  dispatch({
    type: GET_RELATED_EXPERIENCE.REQUEST,
  });
  return individualService.get.relatedExperience(subsetNumber, parentIndividualId).then(
    response => dispatch({
      type: GET_RELATED_EXPERIENCE.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      relatedExperience: response.data,
    }),
    error => dispatch({
      type: GET_RELATED_EXPERIENCE.ERROR,
      error,
    }),
  );
};
