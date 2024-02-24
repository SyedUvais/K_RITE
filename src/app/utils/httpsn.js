import axios from 'axios';
import { getToken } from './get_auth_token';

const httpsn = axios.create({
  baseURL: process.env.NEXT_PUBLIC_OC_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


// Change request data/error here
httpsn.interceptors.request.use(
  (config) => {


    const token = getToken();

    // console.log("token in httpl instance", token);
    if (config.headers.includeAuthorizationToken !== false) {
        config.headers.Authorization = `Bearer ${token || ''}`;
      }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpsn;