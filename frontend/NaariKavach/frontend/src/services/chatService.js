// src/services/chatService.js

import {
  getChatHistory,
  sendMessage,
} from "../utils/api";

// ------------------ CHAT SERVICES ------------------

// Fetch chat history for a specific room
export const fetchChatHistory = async (roomId) => {
  try {
    const response = await getChatHistory(roomId);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Send a message to a specific room
export const sendChatMessage = async (roomId, message) => {
  try {
    const response = await sendMessage(roomId, message);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
