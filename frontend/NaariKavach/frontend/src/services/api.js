// src/utils/api.js

import axios from "axios";

// Base API instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to every request (if available)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ------------------ AUTH APIS ------------------
export const loginUser = (data) => api.post("/auth/login", data);
export const registerUser = (data) => api.post("/auth/register", data);
export const getProfile = () => api.get("/auth/profile");

// ------------------ SOS APIS -------------------
export const sendSOS = (data) => api.post("/sos/send", data);
export const getSOSHistory = () => api.get("/sos/history");

// ------------------ CHAT APIS ------------------
export const getChatHistory = (roomId) => api.get(`/chat/${roomId}`);
export const sendMessage = (roomId, message) =>
  api.post(`/chat/${roomId}`, { message });

// ------------------ USER APIS ------------------
export const getUsers = () => api.get("/users");
export const updateUser = (data) => api.put("/users/update", data);

// ------------------ ADMIN APIS -----------------
export const getAllReports = () => api.get("/admin/reports");
export const resolveReport = (reportId) =>
  api.put(`/admin/reports/${reportId}/resolve`);

export default api;
