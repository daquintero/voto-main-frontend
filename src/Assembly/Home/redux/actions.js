import {
  GET_HOME,
  DISCOVER_CANDIDATES,
  SUBSCRIBED_STATS,
  HOME_SEARCH,
} from './actionCreators';
import service from '../service';

// ------- FIRST VISIT --------
// TODO NOT HAPPENING
// export const openFirstVisit = () => (dispatch) => {
//   dispatch({
//     type: 'FIRST_VISIT',
//   });
// };

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

export const discoverCandidates = gid => (dispatch) => {
  dispatch({
    type: DISCOVER_CANDIDATES.REQUEST,
  });
  return service.get.discoverCandidates(gid).then(
    response =>
      dispatch({
        type: DISCOVER_CANDIDATES.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: DISCOVER_CANDIDATES.ERROR,
        error,
      }),
  );
};

