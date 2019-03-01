import {
  GET_HOME,
  HOME_SEARCH,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';


const initialState = {
  search: {
    instances: [],
  },
  content: {
    informativeSnippets: [],
  },
  actions: initializeActions([
    'GET_HOME',
    'HOME_SEARCH',
  ]),
};


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_HOME.REQUEST'),
        },
      };
    case GET_HOME.SUCCESS:
      return {
        ...state,
        content: {
          ...action.response.instances,
        },
        actions: {
          ...state.actions,
          ...actionResult('GET_HOME.SUCCESS'),
        },
      };
    case GET_HOME.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_HOME.ERROR'),
        },
      };

    case HOME_SEARCH.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('HOME_SEARCH.REQUEST'),
        },
      };
    case HOME_SEARCH.SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          instances: action.response.instances,
        },
        actions: {
          ...state.actions,
          ...actionResult('HOME_SEARCH.SUCCESS'),
        },
      };
    case HOME_SEARCH.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('HOME_SEARCH.ERROR'),
        },
      };
    default:
      return state;
  }
};
