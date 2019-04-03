import axios from 'axios';
import buildUrl from '../../shared/utils/buildUrl';


const baseUrl = process.env.REACT_APP_BASE_URL;
const homeApiUrl = `${baseUrl}/home/api/v1`;
const searchApiUrl = `${baseUrl}/search/api/v1`;


const urls = {
  get: {
    home: `${homeApiUrl}/`,
    subscribedStats: `${homeApiUrl}/get_subscribed_stats/`,
    discoverCandidates: `${homeApiUrl}/discover_candidates/`,
  },
  search: {
    suggest: `${searchApiUrl}/suggest/`,
    search: `${searchApiUrl}/`,
  },
};


// GET
const getHome = () => axios.get(urls.get.home);
const subscribedStats = () => axios.get(urls.get.subscribedStats);
const discoverCandidates = gid => axios.get(buildUrl(urls.get.discoverCandidates, { gid }));

// Search
const suggest = requestData => axios.get(buildUrl(urls.search.suggest, requestData));
const search = requestData => axios.get(buildUrl(urls.search.search, requestData));


const service = {
  get: {
    home: getHome,
    subscribedStats,
    discoverCandidates,
  },
  search: {
    suggest,
    search,
  },
};

export default service;
