// Reducer Libraries
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { throttle } from 'lodash';
import { reducer as formReducer } from 'redux-form';

import mapReducer from '../Reusable/Map/redux/reducer';
import detailPageReducer from '../Assembly/DetailedPage/redux/reducer';
// TODO ADD LATER
// import homeReducer from '../Assembly/Social/redux/reducer';
import basicHomeReducer from '../Assembly/Home/redux/reducer';
import welcomeReducer from '../Layout/TopBar/redux/reducer';
import knowledgeBaseReducer from '../Assembly/KnowledgeBase/redux/reducer';
import reusableReducer from '../Reusable/redux/reducer';

// Local Storage
import { loadState, saveState } from './localStorage';


const reducer = combineReducers({
  openPage: detailPageReducer,
  map: mapReducer,
  home: basicHomeReducer,
  form: formReducer,
  welcome: welcomeReducer,
  knowledgeBase: knowledgeBaseReducer,
  reusable: reusableReducer,
});


const storedState = loadState();


const store = createStore(
  reducer,
  storedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(throttle(() => {
  saveState({
    welcome: store.getState().welcome,
  });
}, 3000));

export default store;
