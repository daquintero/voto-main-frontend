import { actionResult, initializeActions } from '../../../../shared/utils/asyncHelpers';
import {
  CHANGE_MAP_VIEWPORT,
  GET_MAP_DATA,
} from './actionCreators';


const defaultState = {
  viewport: {
    width: 1000,
    height: 600,
    latitude: 8,
    longitude: -80.1,
    zoom: 6,
    maxZoom: 16,
    pitch: 30,
    bearing: 0,
  },
  actions: initializeActions([
    'GET_MAP_DATA',
  ]),
};


export default (state = defaultState, action) => {
  switch (action.type) {
    // Change map viewport reducer ---------------------
    case CHANGE_MAP_VIEWPORT:
      return {
        ...state,
        viewport: action.newMapViewport,
      };
      // -----------------------------------------------

    // Change map viewport reducer ---------------------
    case GET_MAP_DATA.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_MAP_DATA.REQUEST'),
        },
      };
    case GET_MAP_DATA.SUCCESS:
      return {
        ...state,
        data: action.response,
        actions: {
          ...state.actions,
          ...actionResult('GET_MAP_DATA.SUCCESS'),
        },
      };
    case GET_MAP_DATA.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_MAP_DATA.ERROR'),
        },
      };
      // -----------------------------------------------
    default:
      return state;
  }
};
