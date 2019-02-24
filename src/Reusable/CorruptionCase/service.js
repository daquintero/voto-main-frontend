import axios from 'axios';
import buildUrl from '../../shared/utils/buildUrl';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const reusableApiUrl = `${baseUrl}/reusable/api/v1`;

const urls = {
  get: {
    instances: reusableApiUrl,
  },
  post: {
  },
  delete: {
  },
};

// ---------- RELATED -------------
// Corruption Cases GET Requests
const instances = apiQueryData => axios.get(buildUrl(urls.get.instances, apiQueryData));

// Exported Services
const service = {
  get: {
    instances,
  },
  post: {},
  delete: {},
};

export default service;
