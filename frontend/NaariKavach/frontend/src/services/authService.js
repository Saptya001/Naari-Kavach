// src/services/authService.js

import {
  loginUser,
  registerUser,
  getProfile,
} from "../utils/api";

// Save token to localStorage
const setToken = (token) => {
  localStorage.setItem("token", token);
};

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Remove token (logout)
const removeToken = () => {
  localStorage.removeItem("token");
};

// ------------------ AUTH SERVICES ------------------

export const login = async (credentials) => {
  try {
    const response = await loginUser(credentials);
    if (response.data?.token) {
      setToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const register = async (userData) => {
  try {
    const response = await registerUser(userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchProfile = async () => {
  try {
    const response = await getProfile();
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const logout = () => {
  removeToken();
};

export const isAuthenticated = () => {
  return !!getToken();
};
