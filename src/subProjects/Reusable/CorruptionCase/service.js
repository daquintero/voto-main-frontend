import axios from 'axios';
import { buildQueryString } from '../../App/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const corruptionCaseApiUrl = `${baseUrl}/corruptionCase/api/v1`;

const urls = {
  get: {
    // Relationships
    relatedCorruptionCases: `${corruptionCaseApiUrl}/get_related_corruption_cases/`,
  },
  post: {
  },
  delete: {
  },
};

// ---------- RELATED -------------
// Corruption Cases GET Requests
const relatedCorruptionCases = apiQueryData =>
  axios.get(`${urls.get.relatedCorruptionCases}${buildQueryString(apiQueryData)}`);

// Exported Services
const service = {
  get: {
    relatedCorruptionCases,
  },
  post: {},
  delete: {},
};

export default service;
