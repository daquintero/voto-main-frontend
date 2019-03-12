import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';
import {
  GET_KNOWLEDGE_BASE_FEED,
  SEARCH_KNOWLEDGE_BASE,
  GET_KNOWLEDGE_BASE_DETAIL,
} from './actionCreators';


const initialState = {
  feed: {
    instances: [],
  },
  detail: {
    instance: {},
  },
  actions: initializeActions([
    'GET_KNOWLEDGE_BASE_FEED',
    'SEARCH_KNOWLEDGE_BASE',
    'GET_KNOWLEDGE_BASE_DETAIL',
  ]),
};

export default (state = initialState, action) => {
  switch (action.type) {
    // GET_KNOWLEDGE_BASE_FEED reducer
    case GET_KNOWLEDGE_BASE_FEED.INIT:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...initializeActions(['GET_KNOWLEDGE_BASE_FEED']),
        },
      };
    case GET_KNOWLEDGE_BASE_FEED.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_KNOWLEDGE_BASE_FEED.REQUEST'),
        },
      };
    case GET_KNOWLEDGE_BASE_FEED.SUCCESS:
      return {
        ...state,
        feed: {
          ...state.feed,
          ...action.response,
        },
        actions: {
          ...state.actions,
          ...actionResult('GET_KNOWLEDGE_BASE_FEED.SUCCESS'),
        },
      };
    case GET_KNOWLEDGE_BASE_FEED.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_KNOWLEDGE_BASE_FEED.ERROR'),
        },
      };

    // SEARCH_KNOWLEDGE_BASE reducer
    case SEARCH_KNOWLEDGE_BASE.INIT:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...initializeActions(['SEARCH_KNOWLEDGE_BASE']),
        },
      };
    case SEARCH_KNOWLEDGE_BASE.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SEARCH_KNOWLEDGE_BASE.REQUEST'),
        },
      };
    case SEARCH_KNOWLEDGE_BASE.SUCCESS:
      return {
        ...state,
        feed: {
          ...state.feed,
          ...action.response,
        },
        actions: {
          ...state.actions,
          ...actionResult('SEARCH_KNOWLEDGE_BASE.SUCCESS'),
        },
      };
    case SEARCH_KNOWLEDGE_BASE.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('SEARCH_KNOWLEDGE_BASE.ERROR'),
        },
      };

    // GET_KNOWLEDGE_BASE_DETAIL reducer
    case GET_KNOWLEDGE_BASE_DETAIL.INIT:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...initializeActions(['GET_KNOWLEDGE_BASE_DETAIL']),
        },
      };
    case GET_KNOWLEDGE_BASE_DETAIL.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_KNOWLEDGE_BASE_DETAIL.REQUEST'),
        },
      };
    case GET_KNOWLEDGE_BASE_DETAIL.SUCCESS:
      return {
        ...state,
        detail: {
          ...state.detail,
          ...action.response,
        },
        actions: {
          ...state.actions,
          ...actionResult('GET_KNOWLEDGE_BASE_DETAIL.SUCCESS'),
        },
      };
    case GET_KNOWLEDGE_BASE_DETAIL.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_KNOWLEDGE_BASE_DETAIL.ERROR'),
        },
      };
    default:
      return state;
  }
};
