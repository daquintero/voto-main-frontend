import {
  GET_HOME,
  HOME_SEARCH,
  SUBSCRIBED_STATS,
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

export const subscribedStats = () => (dispatch) => {
  dispatch({
    type: SUBSCRIBED_STATS.REQUEST,
  });
  return service.get.subscribedStats().then(
    response =>
      dispatch({
        type: SUBSCRIBED_STATS.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: SUBSCRIBED_STATS.ERROR,
        error,
      }),
  );
};
