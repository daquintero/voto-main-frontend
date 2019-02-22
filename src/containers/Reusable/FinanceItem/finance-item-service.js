import axios from 'axios';
import { buildQueryString } from '../../../shared/utils/utils';

// Local url for the views
const baseUrl = process.env.REACT_APP_BASE_URL;
const financeItemApiUrl = `${baseUrl}/financeItem/api/v1`;

const urls = {
  get: {
    relatedFinanceItems: `${financeItemApiUrl}/get_related_finance_items/`,
  },
  post: {
  },
  delete: {
  },
};

// Corruption Cases GET Requests
const relatedFinanceItems = apiQueryData =>
  axios.get(`${urls.get.relatedFinanceItems}${buildQueryString(apiQueryData)}`);

// Exported Services
const financeItemService = {
  get: {
    relatedFinanceItems,
  },
  post: {},
  delete: {},
};

export default financeItemService;
