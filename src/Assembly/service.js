import axios from 'axios';
import { buildQueryString } from '../App/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const assemblyApiUrl = `${baseUrl}/assembly/api/v1`;

const urls = {
  get: {
    // Full CorruptionCase
    detailedPage: `${assemblyApiUrl}/get_detailed_page/`,
  },
  post: {
  },
  delete: {
  },
};

// ----------- DETAILED PAGE ---------------
// Generic Detailed CorruptionCase Action for all Components
const detailedPage = apiQueryData =>
  axios.get(`${urls.get.detailedPage}${buildQueryString(apiQueryData)}`);

// Exported Services
const service = {
  get: {
    detailedPage,
  },
  post: {},
  delete: {},
};

export default service;
