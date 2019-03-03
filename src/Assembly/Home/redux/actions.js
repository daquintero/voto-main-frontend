import {
  GET_HOME,
  HOME_SEARCH,
  SUBSCRIBED,
} from './actionCreators';
import service from '../service';

// ------- FIRST VISIT --------
export const openFirstVisit = () => (dispatch) => {
  dispatch({
    type: 'FIRST_VISIT',
  });
};

// ------ HOME SERVICES -------
export const getHome = () => (dispatch) => {
  dispatch({
    type: GET_HOME.REQUEST,
  });
  return service.get.home().then(
    response =>
      dispatch({
        type: GET_HOME.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: GET_HOME.ERROR,
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

export const subscribed = () => (dispatch) => {
  dispatch({
    type: SUBSCRIBED.REQUEST,
  });
  return service.get.subscribed().then(
    response =>
      dispatch({
        type: SUBSCRIBED.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: SUBSCRIBED.ERROR,
        error,
      }),
  );
};
