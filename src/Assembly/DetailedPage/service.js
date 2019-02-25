import axios from 'axios';
import buildUrl from '../../shared/utils/buildUrl';


// Local url for the views
const baseUrl = 'http://127.0.0.1:8080'; // process.env.REACT_APP_BASE_URL;
const assemblyApiUrl = `${baseUrl}/assembly/api/v1`;

const urls = {
  get: {
    // Full CorruptionCase
    detailedPage: `${assemblyApiUrl}/`,
  },
  post: {
  },
  delete: {
  },
};

// ----------- DETAILED PAGE ---------------
// Generic Detailed CorruptionCase Action for all Components
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
