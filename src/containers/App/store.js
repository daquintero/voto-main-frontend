import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reusable Reducer Functions
import {
  informativeSnippetReducer,
} from '../Reusable/reusable-redux-index';

const reducer = combineReducers({
  informativeSnippets: informativeSnippetReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
