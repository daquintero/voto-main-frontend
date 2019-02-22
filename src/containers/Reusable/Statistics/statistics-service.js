import axios from 'axios';
import { buildQueryString } from '../../../shared/utils/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const statisticsApiUrl = `${baseUrl}/statistics/api/v1`;

const urls = {
  get: {
    // Relationships
    relatedStatistics: `${statisticsApiUrl}/get_related_corruption_cases/`,
  },
  post: {
  },
  delete: {
  },
};

// ---------- RELATED -------------
// Statistics GET Requests
const relatedStatistics = (apiQueryData) =>
  axios.get(`${urls.get.relatedStatistics}${buildQueryString({
    sn: subsetNumber,
    pc: modelLabel, // TODO Rename to ml Model Label
    pid: parentId,
  })}`);

// Exported Services
const statisticsService = {
  get: {
    relatedStatistics,
  },
  post: {},
  delete: {},
};

export default statisticsService;
