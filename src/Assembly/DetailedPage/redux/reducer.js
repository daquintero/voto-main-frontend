import {
  GET_DETAILED_PAGE,
} from './actionCreators';
import {
  GET_MORE_RELATED_INSTANCES,
} from '../../../Reusable/redux/actionCreators';

import { initializeActions, actionResult } from '../../../shared/utils/asyncHelpers';

// Initial State for Detailed CorruptionCase
const initialState = {
  parentInstance: {},
  relatedInstances: {},
  actions: initializeActions([
    'GET_DETAILED_PAGE',
    'GET_MORE_RELATED_INSTANCES',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DETAILED_PAGE.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_DETAILED_PAGE.REQUEST'),
        },
      };
    case GET_DETAILED_PAGE.SUCCESS: {
      return {
        ...state,
        parentInstance: action.response.instance,
        relatedInstances: {
          ...action.response.relatedInstances,
        },
        actions: {
          ...state.actions,
          ...actionResult('GET_DETAILED_PAGE.SUCCESS'),
        },
      };
    }
    case GET_DETAILED_PAGE.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_DETAILED_PAGE.ERROR', { error: action.error }),
        },
      };

    case GET_MORE_RELATED_INSTANCES.INIT:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_MORE_RELATED_INSTANCES.INIT', { id: action.modelLabel }),
        },
      };
    case GET_MORE_RELATED_INSTANCES.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_MORE_RELATED_INSTANCES.REQUEST', { id: action.modelLabel }),
        },
      };
    case GET_MORE_RELATED_INSTANCES.SUCCESS:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_MORE_RELATED_INSTANCES.SUCCESS', { id: action.modelLabel }),
        },
      };
    case GET_MORE_RELATED_INSTANCES.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_MORE_RELATED_INSTANCES.ERROR', { error: action.error, id: action.modelLabel }),
        },
      };
    default:
      return state;
  }
}

