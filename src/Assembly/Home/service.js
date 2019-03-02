import axios from 'axios';
import buildUrl from '../../shared/utils/buildUrl';


const baseUrl = process.env.REACT_APP_BASE_URL;
const homeApiUrl = `${baseUrl}/home/api/v1/`;
const searchApiUrl = `${baseUrl}/search/api/v1/`;


const urls = {
  get: {
    home: homeApiUrl,
  },
  search: {
    home: searchApiUrl,
  },
};


// GET
const getHome = () => axios.get(urls.get.home);


// Search
const homeSearch = searchData => axios.get(buildUrl(urls.search.home, searchData));

const mailchimpAuth = {
  headers: {
    Authorization: 'apikey dcf50166b5100c83703ed3e547639db2-us20', // just for testing, will add to ENV when working
  },
};

const mailchimp = () => axios.get('https://us20.api.mailchimp.com/schema/3.0/Lists/932613c9a8', mailchimpAuth);

const service = {
  get: {
    home: getHome,
    mailchimp,
  },
  search: {
    home: homeSearch,
  },
};

export default service;
