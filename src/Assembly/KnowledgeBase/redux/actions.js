import service from '../service';
import {
  GET_KNOWLEDGE_BASE_FEED,
  SEARCH_KNOWLEDGE_BASE,
  GET_KNOWLEDGE_BASE_DETAIL,
} from './actionCreators';


export const getKnowledgeBaseFeed = () => (dispatch) => {
  dispatch({
    type: GET_KNOWLEDGE_BASE_FEED.REQUEST,
  });
  return service.get.knowledgeBaseFeed().then(
    response =>
      dispatch({
        type: GET_KNOWLEDGE_BASE_FEED.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: GET_KNOWLEDGE_BASE_FEED.ERROR,
        error,
      }),
  );
};


export const searchKnowledgeBase = requestData => (dispatch) => {
  dispatch({
    type: SEARCH_KNOWLEDGE_BASE.REQUEST,
  });
  return service.search.knowledgeBase(requestData).then(
    response =>
      dispatch({
        type: SEARCH_KNOWLEDGE_BASE.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: SEARCH_KNOWLEDGE_BASE.ERROR,
        error,
      }),
  );
};


export const getKnowledgeBaseDetail = requestData => (dispatch) => {
  dispatch({
    type: GET_KNOWLEDGE_BASE_DETAIL.REQUEST,
  });
  return service.get.detail(requestData).then(
    response =>
      dispatch({
        type: GET_KNOWLEDGE_BASE_DETAIL.SUCCESS,
        response: response.data,
      }),
    error =>
      dispatch({
        type: GET_KNOWLEDGE_BASE_DETAIL.ERROR,
        error,
      }),
  );
};
