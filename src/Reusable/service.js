import axios from 'axios';
import buildUrl from '../shared/utils/buildUrl';


const baseUrl = process.env.REACT_APP_BASE_URL;
const reusableApiUrl = `${baseUrl}/reusable/api/v1/`;


const urls = {
  get: {
    instances: reusableApiUrl,
  },
};


const getInstances = requestData => axios.get(buildUrl(urls.get.instances, requestData));


const service = {
  get: {
    instances: getInstances,
  },
};

export default service;
