import axios from 'axios';
import { buildQueryString } from '../../App/utils';

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
const relatedIndividuals = (subsetNumber, modelLabel, parentId) =>
  axios.get(`${urls.get.relatedIndividuals}${buildQueryString({
    sn: subsetNumber,
    pc: modelLabel,
    pid: parentId,
  })}`);

// Sub Related Individuals
const relatedControversies = (subsetNumber, parentIndividualId) =>
  axios.get(`${urls.get.relatedIndividuals}${buildQueryString({
    sn: subsetNumber,
    pid: parentIndividualId,
  })}`);

const relatedPromises = (subsetNumber, parentIndividualId) =>
  axios.get(`${urls.get.relatedIndividuals}${buildQueryString({
    sn: subsetNumber,
    pid: parentIndividualId,
  })}`);

const relatedExperience = (subsetNumber, parentIndividualId) =>
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
