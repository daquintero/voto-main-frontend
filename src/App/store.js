import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reusable Reducer Functions
import {
  informativeSnippetReducer,
  individualReducer,
  corruptionCaseReducer,
  organizationReducer,
  financialItemReducer,
  mapReducer,
} from '../Reusable/reusableReduxIndex';
import detailPageReducer from '../Assembly/DetailedPage/redux/reducer';

const openPage = combineReducers({
  parentInstance: detailPageReducer,
  relatedInformativeSnippets: informativeSnippetReducer,
  relatedIndividual: individualReducer,
  relatedCorruptionCase: corruptionCaseReducer,
  relatedOrganization: organizationReducer,
  relatedFinancialItem: financialItemReducer,
});

const reducer = combineReducers({
  openPage,
  map: mapReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
