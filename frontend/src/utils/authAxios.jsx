import axios from 'axios';
import Cookies from 'js-cookie';

// Function to get the current token from cookies
const getToken = () => Cookies.get('token');

// Create an Axios instance with a request interceptor
const authAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Add a request interceptor to update the Authorization header before each request
authAxios.interceptors.request.use(
  (config) => {
    // Get the current token from cookies and set it in the Authorization header
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authAxios;
