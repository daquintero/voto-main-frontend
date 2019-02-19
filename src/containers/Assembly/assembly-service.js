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
const detailedPage = (modelLabel, parentId) =>
  axios.get(`${urls.get.detailedPage}${buildQueryString({
    pid: parentId,
    ml: modelLabel,
  })}`);

// Exported Services
const assemblyService = {
  get: {
    detailedPage,
  },
  post: {},
  delete: {},
};

export default assemblyService;
