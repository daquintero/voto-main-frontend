/* eslint-disable */
// Reducer Libraries
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { throttle } from 'lodash';
import { reducer as formReducer } from 'redux-form';

import mapReducer from '../Reusable/Map/redux/reducer';
import detailPageReducer from '../Assembly/DetailedPage/redux/reducer';
import homeReducer from '../Assembly/Home/redux/reducer';

// Local Storage
import { loadState, saveState } from './localStorage';

const reducer = combineReducers({
  openPage: detailPageReducer,
  map: mapReducer,
  home: homeReducer,
  form: formReducer,
});

// const storedState = loadState();

const store = createStore(
  reducer,
  // storedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(throttle(() => {
  saveState({
    home: store.getState().home,
  });
}, 3000));

export default store;
