import axios from 'axios';
import { buildQueryString } from '../../../shared/utils/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const individualApiUrl = `${baseUrl}/individual/api/v1`;

const urls = {
  get: {
    // Relationships
    relatedIndividuals: `${individualApiUrl}/get_related_individuals/`,
    // Sub Related Information
    relatedControversies: `${individualApiUrl}/get_related_controversies/`,
    relatedPromises: `${individualApiUrl}/get_related_promises/`,
    relatedExperience: `${individualApiUrl}/get_related_experience/`,
  },
  post: {
  },
  delete: {
  },
};

// Individuals GET Requests
const relatedIndividuals = (apiQueryData) =>
  axios.get(`${urls.get.relatedIndividuals}${buildQueryString(apiQueryData)}`);

// Sub Related Individuals
const relatedControversies = (apiQueryData) =>
  axios.get(`${urls.get.relatedIndividuals}${buildQueryString({
    sn: subsetNumber,
    pid: parentIndividualId,
  })}`);

const relatedPromises = (apiQueryData) =>
  axios.get(`${urls.get.relatedIndividuals}${buildQueryString({
    sn: subsetNumber,
    pid: parentIndividualId,
  })}`);

const relatedExperience = (apiQueryData) =>
  axios.get(`${urls.get.relatedIndividuals}${buildQueryString({
    sn: subsetNumber,
    pid: parentIndividualId,
  })}`);


// Exported Services
const individualService = {
  get: {
    relatedIndividuals,
    relatedControversies,
    relatedPromises,
    relatedExperience,
  },
  post: {},
  delete: {},
};

export default individualService;
