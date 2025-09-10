// src/services/sosService.js

import {
  sendSOS,
  getSOSHistory,
} from "../utils/api";

// ------------------ SOS SERVICES ------------------

// Trigger SOS alert
export const triggerSOS = async (sosData) => {
  try {
    const response = await sendSOS(sosData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Fetch SOS history (for user/admin)
export const fetchSOSHistory = async () => {
  try {
    const response = await getSOSHistory();
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
