import axios from 'axios';
import { getLocalStorage } from '../utilsFun/UtilityFun';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://yourapi.com/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = getLocalStorage("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
