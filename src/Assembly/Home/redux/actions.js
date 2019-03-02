import {
  GET_HOME,
  HOME_SEARCH,
  GET_SUBSCRIBERS,
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

// TODO Finish
export const getSubscribers = () => (dispatch) => {
  dispatch({
    type: GET_SUBSCRIBERS.REQUEST,
  });
  return service.subscribers.home().then(
    response =>
      dispatch({
        type: GET_SUBSCRIBERS.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: GET_SUBSCRIBERS.ERROR,
        error,
      }),
  );
};