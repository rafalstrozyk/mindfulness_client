import axios from 'axios';
const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  baseURL: 'http://localhost:8000',
});
instance.defaults.withCredentials = true;
export default instance;
