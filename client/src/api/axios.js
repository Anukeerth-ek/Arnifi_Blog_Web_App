// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // adjust this if you're using a different port or domain
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
