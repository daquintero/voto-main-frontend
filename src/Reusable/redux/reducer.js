import {
  GET_MORE_RELATED_INSTANCES,
  INSTANCE_DETAIL,
  TOGGLE_INSTANCE_DETAIL_MODAL,
} from './actionCreators';
import { initializeActions, actionResult } from '../../shared/utils/asyncHelpers';


const initialState = {
  openInstance: {},
  openInstanceModal: false,
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

    case INSTANCE_DETAIL:
      return {
        ...state,
        openInstance: action.instance,
      };

    case TOGGLE_INSTANCE_DETAIL_MODAL:
      return {
        ...state,
        openInstanceModal: !state.openInstanceModal,
      };

    default:
      return state;
  }
};
