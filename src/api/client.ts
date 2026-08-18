import axios from 'axios';

const apiRoot = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:57138').replace(/\/$/, '');

export const apiClient = axios.create({
  baseURL: apiRoot,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
});

// Uncomment once the backend issues auth tokens:
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('chc-token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
