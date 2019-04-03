import {
  GET_HOME,
  DISCOVER_CANDIDATES,
  SUBSCRIBED_STATS,
  SUGGEST,
  SEARCH,
  INCREMENT_SEARCH_PAGE,
} from './actionCreators';
import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';


const initialState = {
  visited: true,
  search: {
    options: [],
    instances: [],
    currentPage: 0,
    done: false,
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
    'SUGGEST',
    'SEARCH',
    'DISCOVER_CANDIDATES',
    'SUBSCRIBED_STATS',
  ]),
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'FIRST_VISIT':
      return {
        ...state,
        visited: false,
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
        presidential: action.response.instances.individuals,
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

    case SUGGEST.INIT:
      return {
        ...state,
        search: {
          ...state.search,
          options: [],
        },
        actions: {
          ...state.actions,
          ...initializeActions(['SUGGEST']),
        },
      };
    case SUGGEST.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SUGGEST.REQUEST'),
        },
      };
    case SUGGEST.SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          options: action.response.options,
        },
        actions: {
          ...state.actions,
          ...actionResult('SUGGEST.SUCCESS'),
        },
      };
    case SUGGEST.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SUGGEST.ERROR', { error: action.error }),
        },
      };

    case SEARCH.INIT:
      return {
        ...state,
        search: {
          ...state.search,
          currentPage: 0,
        },
        actions: {
          ...state.actions,
          ...initializeActions(['SEARCH']),
        },
      };
    case SEARCH.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SEARCH.REQUEST'),
        },
      };
    case SEARCH.SUCCESS: {
      if (action.currentPage === 0) {
        return {
          ...state,
          search: {
            ...state.search,
            instances: action.response.instances,
            done: action.response.done,
          },
          actions: {
            ...state.actions,
            ...actionResult('SEARCH.SUCCESS'),
          },
        };
      }
      return {
        ...state,
        search: {
          ...state.search,
          instances: [
            ...state.search.instances,
            ...action.response.instances,
          ],
          done: action.response.done,
        },
        actions: {
          ...state.actions,
          ...actionResult('SEARCH.SUCCESS'),
        },
      };
    }
    case SEARCH.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SEARCH.ERROR'),
        },
      };

    case INCREMENT_SEARCH_PAGE:
      return {
        ...state,
        search: {
          ...state.search,
          currentPage: state.search.currentPage + 1,
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
        discover: {
          ...state.discover,
          candidates: action.response.instances.individuals,
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
