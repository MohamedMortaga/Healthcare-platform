import axios from 'axios';

// Central Axios instance. Point VITE-style env var at the real backend once
// it exists; every api/*.ts module below imports `apiClient` instead of
// calling axios directly so auth headers / base URL only live in one place.
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

// Uncomment once the backend issues auth tokens:
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('chc-token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
