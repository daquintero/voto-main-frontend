import { GET_RELATED_ORGANIZATIONS } from './actionCreators';
import { initializeActions, actionResult } from '../../../../shared/utils/asyncHelpers';

// Initial State for Corruption Cases
const initialState = {
  relatedOrganizations: {},
  actions: initializeActions([
    'GET_RELATED_ORGANIZATIONS',
  ]),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RELATED_ORGANIZATIONS.REQUEST:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_ORGANIZATIONS.REQUEST'),
        },
      };
    case GET_RELATED_ORGANIZATIONS.SUCCESS:
      return {
        ...state,
        relatedOrganizations:
          [...state.openPage.organization.relatedOrganizations, action.relatedOrganizations],
        subsetNumber: action.subsetNumber,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_ORGANIZATIONS.SUCCESS'),
        },
      };
    case GET_RELATED_ORGANIZATIONS.ERROR:
      return {
        ...state,
        actions: {
          ...state.actions,
          ...actionResult('GET_RELATED_ORGANIZATIONS.ERROR', { error: action.error }),
        },
      };
    default:
      return state;
  }
}

