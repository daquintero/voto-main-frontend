import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reusable Reducer Functions
import mapReducer from '../Reusable/Map/redux/reducer';
import detailPageReducer from '../Assembly/DetailedPage/redux/reducer';

const openPage = combineReducers({
  parentInstance: detailPageReducer,
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
