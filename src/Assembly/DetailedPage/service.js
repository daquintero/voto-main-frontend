import axios from 'axios';
import buildUrl from '../../shared/utils/buildUrl';


// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const assemblyApiUrl = `${baseUrl}/assembly/api/v1`;

const urls = {
  get: {
    // Full NewsLike
    detailedPage: `${assemblyApiUrl}/`,
  },
  post: {
  },
  delete: {
  },
};

// ----------- DETAILED PAGE ---------------
// Generic Detailed NewsLike Action for all Components
const detailedPage = apiQueryData => axios.get(buildUrl(urls.get.detailedPage, apiQueryData));

// Exported Services
const service = {
  get: {
    detailedPage,
  },
  post: {},
  delete: {},
};

export default service;
