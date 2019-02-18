/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_RELATED_ORGANIZATIONS,
} from './actionCreators';
import organizationService from '../organization-service';

// This function inputs the current subset and waits for the server updates prior to updating the subsets data/number
export const getRelatedOrganizations = (subsetNumber, modelLabel, parentId) => (dispatch) => {
  dispatch({
    type: GET_RELATED_ORGANIZATIONS.REQUEST,
  });
  return organizationService.get.relatedOrganizations(subsetNumber, modelLabel, parentId).then(
    response => dispatch({
      type: GET_RELATED_ORGANIZATIONS.SUCCESS,
      subsetNumber: response.data.subsetNumber,
      relatedOrganizations: response.data.relatedOrganizations,
    }),
    error => dispatch({
      type: GET_RELATED_ORGANIZATIONS.ERROR,
      error,
    }),
  );
};
