import {
  GET_HOME,
  DISCOVER_CANDIDATES,
  SUBSCRIBED_STATS,
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
  subscribedStats: {
    mailchimpSubscribed: 0,
    studioUsers: 0,
  },
  presidential: [],
  discover: {
    candidates: [],
    gid: '8_0',
  },
  subscriptionForm: {},
  actions: initializeActions([
    'GET_HOME',
    'DISCOVER_CANDIDATES',
    'SUBSCRIBED_STATS',
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

    case DISCOVER_CANDIDATES.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('DISCOVER_CANDIDATES.REQUEST'),
        },
      };
    case DISCOVER_CANDIDATES.SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          instances: action.response.instances,
        },
        actions: {
          ...state.actions,
          ...actionResult('DISCOVER_CANDIDATES.SUCCESS'),
        },
      };
    case DISCOVER_CANDIDATES.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('DISCOVER_CANDIDATES.ERROR'),
        },
      };
    case SUBSCRIBED_STATS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SUBSCRIBED_STATS.REQUEST'),
        },
      };
    case SUBSCRIBED_STATS.SUCCESS:
      return {
        ...state,
        search: {
          ...state,
          subscribedStats: action.response,
        },
        actions: {
          ...state.actions,
          ...actionResult('SUBSCRIBED_STATS.SUCCESS'),
        },
      };
    case SUBSCRIBED_STATS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SUBSCRIBED_STATS.ERROR'),
        },
      };
    default:
      return state;
  }
};