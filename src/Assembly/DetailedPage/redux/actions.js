import {
  GET_DETAILED_PAGE,
} from './actionCreators';
import service from '../service';

export const getDetailedPage = apiQueryData => (dispatch) => {  // eslint-disable-line
  dispatch({
    type: GET_DETAILED_PAGE.REQUEST,
  });
  return service.get.detailedPage(apiQueryData).then(
    response =>
      dispatch({
        type: GET_DETAILED_PAGE.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: GET_DETAILED_PAGE.ERROR,
        error,
      }),
  );
};
