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
} from '../Reusable/reusable-redux-index';

const openPage = combineReducers({
  informativeSnippet: informativeSnippetReducer,
  individual: individualReducer,
  corruptionCase: corruptionCaseReducer,
  organization: organizationReducer,
  financialItem: financialItemReducer,
});

const reducer = combineReducers({
  openPage,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
