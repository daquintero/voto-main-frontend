/* eslint-disable import/prefer-default-export */
// TODO Fix this
import {
  GET_DETAILED_PAGE,
} from './actionCreators';
import service from '../../service';

// --------------- PAGE --------------
// Basic Detailed CorruptionCase detailed action that gets the basic fields for the parentID
export const getDetailedPage = apiQueryData => (dispatch) => {
  dispatch({
    type: GET_DETAILED_PAGE.REQUEST,
  });
  return service.get.detailedPage(apiQueryData).then(
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
