import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import mapReducer from '../Reusable/Map/redux/reducer';
import detailPageReducer from '../Assembly/DetailedPage/redux/reducer';
import homeReducer from '../Assembly/Home/redux/reducer';


const reducer = combineReducers({
  openPage: detailPageReducer,
  map: mapReducer,
  home: homeReducer,
});


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
