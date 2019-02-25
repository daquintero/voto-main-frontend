import {
  GET_MORE_RELATED_INSTANCES,
} from './actionCreators';
import { initializeActions, actionResult } from '../../shared/utils/asyncHelpers';


const initialState = {
  actions: initializeActions([
    'GET_MORE_RELATED_INSTANCES',
  ]),
};


export default (state = initialState, action) => {
  switch (action.type) {
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
};
