import { createContext, useState, useContext } from "react";

// Create Chat Context
const ChatContext = createContext();

// Custom hook to use ChatContext
export const useChat = () => useContext(ChatContext);

// Provider component
export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]); // { id, sender, text, timestamp }
  const [activeChat, setActiveChat] = useState(null);

  // Send a message
  const sendMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  // Receive a message (mock/websocket integration later)
  const receiveMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, activeChat, setActiveChat, sendMessage, receiveMessage }}>
      {children}
    </ChatContext.Provider>
  );
};