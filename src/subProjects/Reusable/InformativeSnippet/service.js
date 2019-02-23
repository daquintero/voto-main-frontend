import axios from 'axios';
import { buildQueryString } from '../../App/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const snippetApiUrl = `${baseUrl}/snippet/api/v1`;

const urls = {
  get: {
    recentInformativeSnippets: `${snippetApiUrl}/get_recent_informative_snippets/`,
    relatedInformativeSnippets: `${snippetApiUrl}/get_related_informative_snippets/`,
  },
  post: {
  },
  delete: {
  },
};

// Snippets GET Requests
const recentInformativeSnippets = subsetNumber =>
  axios.get(`${urls.get.recentInformativeSnippets}${buildQueryString({
    sn: subsetNumber,
  })}`);
const relatedInformativeSnippets = apiQueryData =>
  axios.get(`${urls.get.relatedInformativeSnippets}${buildQueryString(apiQueryData)}`);

// Exported Services
const service = {
  get: {
    recentInformativeSnippets,
    relatedInformativeSnippets,
  },
  post: {},
  delete: {},
};

export default service;
