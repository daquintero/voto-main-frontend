/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_DETAILED_PAGE,
} from './actionCreators';
import assemblyService from '../../assembly-service';

// --------------- PAGE --------------
// Basic Detailed CorruptionCase detailed action that gets the basic fields for the parentID
export const getDetailedPage = (modelLabel, parentId) => (dispatch) => {
  dispatch({
    type: GET_DETAILED_PAGE.REQUEST,
  });
  return assemblyService.get.detailedPage(parentId, modelLabel).then(
    response => dispatch({
      type: GET_DETAILED_PAGE.SUCCESS,
      basic: response.data,
    }),
    error => dispatch({
      type: GET_DETAILED_PAGE.ERROR,
      error,
    }),
  );
};
