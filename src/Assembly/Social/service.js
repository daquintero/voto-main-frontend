import axios from 'axios';
import buildUrl from '../../shared/utils/buildUrl';


const baseUrl = process.env.REACT_APP_BASE_URL;
const homeApiUrl = `${baseUrl}/home/api/v1/`;
const searchApiUrl = `${baseUrl}/search/api/v1/`;
const subscribedApiUrl = `${baseUrl}/home/api/v1/subscribed/`;

const urls = {
  get: {
    home: homeApiUrl,
    subscribed: subscribedApiUrl,
  },
  search: {
    home: searchApiUrl,
  },
};


// GET
const getHome = () => axios.get(urls.get.home);
const subscribed = () => axios.get(urls.get.subscribed);

// Search
const homeSearch = searchData => axios.get(buildUrl(urls.search.home, searchData));

const service = {
  get: {
    home: getHome,
    subscribed,
  },
  search: {
    home: homeSearch,
  },
};

export default service;
