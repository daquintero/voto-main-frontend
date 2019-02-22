import axios from 'axios';
import { buildQueryString } from '../../App/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const organizationApiUrl = `${baseUrl}/organization/api/v1`;

const urls = {
  get: {
    relatedOrganizations: `${organizationApiUrl}/get_related_organizations/`,
  },
  post: {
  },
  delete: {
  },
};

// Corruption Cases GET Requests
const relatedOrganizations = apiQueryData =>
  axios.get(`${urls.get.relatedOrganizations}${buildQueryString(apiQueryData)}`);

// Exported Services
const organizationService = {
  get: {
    relatedOrganizations,
  },
  post: {},
  delete: {},
};

export default organizationService;
