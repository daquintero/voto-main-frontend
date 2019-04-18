import {
  GET_HOME,
  DISCOVER_CANDIDATES,
  SUBSCRIBED_STATS,
  SUGGEST,
  SEARCH,
} from './actionCreators';
import service from '../service';


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


export const suggest = requestData => (dispatch) => {
  dispatch({
    type: SUGGEST.REQUEST,
  });
  return service.search.suggest(requestData).then(
    response =>
      dispatch({
        type: SUGGEST.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: SUGGEST.ERROR,
        error,
      }),
  );
};


export const search = requestData => (dispatch) => {
  dispatch({
    type: SEARCH.REQUEST,
  });
  return service.search.search(requestData).then(
    response =>
      dispatch({
        type: SEARCH.SUCCESS,
        response: response.data,
        currentPage: requestData.page,
      }),
    error =>
      dispatch({
        type: SEARCH.ERROR,
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

