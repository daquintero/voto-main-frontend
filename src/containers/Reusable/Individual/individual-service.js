import axios from 'axios';
import { buildQueryString } from '../../App/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const individualApiUrl = `${baseUrl}/individual/api/v1`;

const urls = {
  get: {
    // Relationships
    relatedIndividuals: `${individualApiUrl}/get_related_individuals/`,
  },
  post: {
  },
  delete: {
  },
};

// Individuals GET Requests
const relatedIndividuals = (subsetNumber, modelLabel, parentId) =>
  axios.get(`${urls.get.relatedIndividuals}${buildQueryString({
    sn: subsetNumber,
    pc: modelLabel,
    pid: parentId,
  })}`);

// Exported Services
const individualService = {
  get: {
    relatedIndividuals,
  },
  post: {},
  delete: {},
};

export default individualService;
