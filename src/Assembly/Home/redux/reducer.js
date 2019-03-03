import {
  GET_HOME,
  HOME_SEARCH,
  SUBSCRIBED,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';


const initialState = {
  firstVisit: true,
  search: {
    instances: [],
  },
  content: {
    informativeSnippets: [],
  },
  subscribed: {
    mailchimpSubscribed: 0,
    studioUsers: 0,
  },
  actions: initializeActions([
    'GET_HOME',
    'HOME_SEARCH',
    'SUBSCRIBED',
  ]),
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'FIRST_VISIT':
      return {
        ...state,
        firstVisit: false,
      };
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
    case SUBSCRIBED.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SUBSCRIBED.REQUEST'),
        },
      };
    case SUBSCRIBED.SUCCESS:
      return {
        ...state,
        search: {
          ...state,
          subscribed: action.response,
        },
        actions: {
          ...state.actions,
          ...actionResult('SUBSCRIBED.SUCCESS'),
        },
      };
    case SUBSCRIBED.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SUBSCRIBED.ERROR'),
        },
      };
    default:
      return state;
  }
};
