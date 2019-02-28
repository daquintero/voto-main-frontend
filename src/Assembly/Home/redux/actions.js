import {
  HOME_SEARCH,
} from './actionCreators';
import service from '../service';


export const getHome = () => (dispatch) => {
  dispatch({
    type: HOME_SEARCH.REQUEST,
  });
  return service.get.home().then(
    response =>
      dispatch({
        type: HOME_SEARCH.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: HOME_SEARCH.ERROR,
        error,
      }),
  );
};


export const homeSearch = searchData => (dispatch) => {
  dispatch({
    type: HOME_SEARCH.REQUEST,
  });
  return service.search.home(searchData).then(
    response =>
      dispatch({
        type: HOME_SEARCH.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: HOME_SEARCH.ERROR,
        error,
      }),
  );
};
