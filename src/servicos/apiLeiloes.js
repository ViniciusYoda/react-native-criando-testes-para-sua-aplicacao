import axios from 'axios';

// create axios
const instance = axios.create({
  baseURL: 'http://10.0.2.112:3000/',
  timeout: 1000,
});

export default instance;
