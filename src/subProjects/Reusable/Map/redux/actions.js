import service from '../service';
import {
  CHANGE_MAP_VIEWPORT,
  GET_MAP_DATA,
} from './actionCreators';


export const changeMapViewport = (newMapViewport) => { // eslint-disable-line
  return {
    type: CHANGE_MAP_VIEWPORT,
    newMapViewport,
  };
};


export const getMapData = () => (dispatch) => {
  dispatch({
    type: GET_MAP_DATA.REQUEST,
  });
  return service.get.mapData().then(
    response =>
      dispatch({
        type: GET_MAP_DATA.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: GET_MAP_DATA.ERROR,
        error,
      }),
  );
};
