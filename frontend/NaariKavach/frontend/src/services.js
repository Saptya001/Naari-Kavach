import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:5000/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

// Example interceptor (optional)
api.interceptors.request.use(
  (config) => {
    // Add token if exists
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
