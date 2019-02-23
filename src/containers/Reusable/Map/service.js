import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8080';
const mapsApiBaseUrl = `${baseUrl}/maps/api/v1`;

const urls = {
  get: {
    mapData: `${mapsApiBaseUrl}/get_map_data/`,
  },
};

const mapData = () => axios.get(urls.get.mapData);


export default {
  get: {
    mapData,
  },
};
