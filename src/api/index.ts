import axios from 'axios';
import Cookies from 'js-cookie';
const instance = axios.create({
  baseURL: 'https://limitless-lake-55070.herokuapp.com/',
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => {
    console.log('error', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
    }
  }
);

export default instance;
