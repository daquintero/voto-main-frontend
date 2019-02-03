import axios from 'axios';
import { buildQueryString } from '../../App/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const corruptionCaseApiUrl = `${baseUrl}/corruptionCase/api/v1`;

const urls = {
  get: {
    relatedCorruptionCases: `${corruptionCaseApiUrl}/get_related_corruption_cases/`,
  },
  post: {
  },
  delete: {
  },
};

// Corruption Cases GET Requests
const relatedCorruptionCases = (subsetNumber, parentClass, parentId) =>
  axios.get(`${urls.get.relatedCorruptionCases}${buildQueryString({
    sn: subsetNumber,
    pc: parentClass,
    pid: parentId,
  })}`);

// Exported Services
const corruptionCaseService = {
  get: {
    relatedCorruptionCases,
  },
  post: {},
  delete: {},
};

export default corruptionCaseService;
