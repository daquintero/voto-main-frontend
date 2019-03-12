import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';
import {
  GET_KNOWLEDGE_BASE_FEED,
  SEARCH_KNOWLEDGE_BASE,
} from './actionCreators';


const initialState = {
  feed: {
    instances: [],
  },
  actions: initializeActions([
    'GET_KNOWLEDGE_BASE_FEED',
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
    default:
      return state;
  }
};
