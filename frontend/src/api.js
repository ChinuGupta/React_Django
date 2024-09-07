import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem(ACCESS_TOKEN); // Fetch token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
    }
    return config; // Don't forget to return the config
  }, (error) => {
    return Promise.reject(error); // Handle request errors
  });

  export default api;