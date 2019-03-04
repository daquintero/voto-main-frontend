import axios from 'axios';
import buildUrl from '../../shared/utils/buildUrl';


const baseUrl = process.env.REACT_APP_BASE_URL;
const homeApiUrl = `${baseUrl}/home/api/v1/`;
const searchApiUrl = `${baseUrl}/search/api/v1/`;
const subscribedStatsApiUrl = `${baseUrl}/home/api/v1/subscribedStats/`;
const discoverCandidatesApiUrl = `${baseUrl}/home/api/v1/discoverCandidates/`;

const urls = {
  get: {
    home: homeApiUrl,
    subscribedStats: subscribedStatsApiUrl,
    discoverCandidates: discoverCandidatesApiUrl,
  },
  search: {
    home: searchApiUrl,
  },
};


// GET
const getHome = () => axios.get(urls.get.home);
const subscribedStats = () => axios.get(urls.get.subscribedStats);
const discoverCandidates = gid => axios.get(buildUrl(urls.get.discoverCandidates, { gid }));

// Search
const homeSearch = searchData => axios.get(buildUrl(urls.search.home, searchData));

const service = {
  get: {
    home: getHome,
    subscribedStats,
    discoverCandidates,
  },
  search: {
    home: homeSearch,
  },
};

export default service;
