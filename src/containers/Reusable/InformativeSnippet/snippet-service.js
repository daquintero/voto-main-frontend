import axios from 'axios';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const snippetApiUrl = `${baseUrl}/snippet/api/v1`;

const urls = {
  get: {
    recentInformativeSnippets: `${snippetApiUrl}/get_recent_informative_snippets/`,
  },
  post: {
  },
  delete: {
  },
};

// Snippets GET Requests
const recentInformativeSnippets = () => axios.get(urls.get.recentInformativeSnippets);

// Exported Services
const snippetService = {
  get: {
    recentInformativeSnippets,
  },
  post: {},
  delete: {},
};

export default snippetService;
