import axios from 'axios';

// const baseUrl = '127.0.0.1:8000';

const urls = {
  get: {
    mapData: 'http://127.0.0.1:8000/static/data/electoral-circuits-v3.json',
  },
};

const mapData = () => axios.get(urls.get.mapData);


export default {
  get: {
    mapData,
  },
};
