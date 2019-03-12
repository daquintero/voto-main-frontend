import axios from 'axios';
import buildUrl from '../../shared/utils/buildUrl';

const baseUrl = process.env.REACT_APP_BASE_URL;
const knowledgeBaseApi = `${baseUrl}/knowledge_base/api/v1`;


const urls = {
  get: {
    knowledgeBaseFeed: `${knowledgeBaseApi}/feed/`,
    detail: `${knowledgeBaseApi}/detail/`,
  },
  search: {
    knowledgeBase: `${knowledgeBaseApi}/search/`,
  },
};


// GET requests
const getKnowledgeBaseFeed = () => axios.get(urls.get.knowledgeBaseFeed);


const getKnowledgeBaseDetail = ({ modelLabel, id }) =>
  axios.get(buildUrl(urls.get.detail, { ml: modelLabel, id }));


// Search requests
const searchKnowledgeBase = requestData => axios.get(buildUrl(urls.search.knowledgeBase, requestData));


const service = {
  get: {
    knowledgeBaseFeed: getKnowledgeBaseFeed,
    detail: getKnowledgeBaseDetail,
  },
  search: {
    knowledgeBase: searchKnowledgeBase,
  },
};

export default service;
