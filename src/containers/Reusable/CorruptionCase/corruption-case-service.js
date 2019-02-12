import axios from 'axios';
import { buildQueryString } from '../../App/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const corruptionCaseApiUrl = `${baseUrl}/corruptionCase/api/v1`;

const urls = {
  get: {
    // Full Page
    detailedCorruptionCasePage: `${corruptionCaseApiUrl}/get_detailed_corruption_case_page/`,
    // Relationships
    relatedCorruptionCases: `${corruptionCaseApiUrl}/get_related_corruption_cases/`,
  },
  post: {
  },
  delete: {
  },
};

// ----------- PAGE ---------------
const detailedCorruptionCasePage = parentId =>
  axios.get(`${urls.get.detailedCorruptionCasePage}${buildQueryString({
    pid: parentId,
  })}`);


// ---------- RELATED -------------
// Corruption Cases GET Requests
const relatedCorruptionCases = (subsetNumber, parentClass, parentId) =>
  axios.get(`${urls.get.relatedCorruptionCases}${buildQueryString({
    sn: subsetNumber,
    pc: parentClass, // TODO Rename to ml Model Label
    pid: parentId,
  })}`);

// Exported Services
const corruptionCaseService = {
  get: {
    relatedCorruptionCases,
    detailedCorruptionCasePage,
  },
  post: {},
  delete: {},
};

export default corruptionCaseService;
