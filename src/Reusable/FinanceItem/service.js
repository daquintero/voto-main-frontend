import axios from 'axios';
import { buildQueryString } from '../../App/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const financeItemApiUrl = `${baseUrl}/financeItem/api/v1`;

const urls = {
  get: {
    relatedFinanceItems: `${financeItemApiUrl}/get_related_finance_items/`,
    corruptionFunds: `${financeItemApiUrl}/get_corruption_funds/`,
    nonCorruptionFunds: `${financeItemApiUrl}/get_non_corruption_funds/`,
    allFunds: `${financeItemApiUrl}/get_all_funds/`,
  },
  post: {
  },
  delete: {
  },
};

// Corruption Cases GET Requests
const relatedFinanceItems = apiQueryData =>
  axios.get(`${urls.get.relatedFinanceItems}${buildQueryString(apiQueryData)}`);

const corruptionFunds = apiQueryData =>
  axios.get(`${urls.get.corruptionFunds}${buildQueryString(apiQueryData)}`);

const nonCorruptionFunds = apiQueryData =>
  axios.get(`${urls.get.nonCorruptionFunds}${buildQueryString(apiQueryData)}`);

const allFunds = apiQueryData =>
  axios.get(`${urls.get.nonCorruptionFunds}${buildQueryString(apiQueryData)}`);

// Exported Services
const service = {
  get: {
    relatedFinanceItems,
    corruptionFunds,
    nonCorruptionFunds,
    allFunds,
  },
  post: {},
  delete: {},
};

export default service;
