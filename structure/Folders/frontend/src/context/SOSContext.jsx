import React, { createContext, useContext, useState, useCallback } from "react";

// Create Context
const SOSContext = createContext();

// Custom Hook for easy access
export const useSOS = () => {
  return useContext(SOSContext);
};

// Provider Component
export const SOSProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastTriggered, setLastTriggered] = useState(null);

  // Activate SOS (API call simulation)
  const triggerSOS = useCallback(async () => {
    try {
      setLoading(true);
      // 👉 Here you would call your backend SOS API
      // Example: await sosService.triggerSOS();

      // Fake delay to simulate API
      await new Promise((res) => setTimeout(res, 2000));

      setIsActive(true);
      setLastTriggered(new Date());
    } catch (error) {
      console.error("Failed to trigger SOS:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Reset SOS state
  const resetSOS = useCallback(() => {
    setIsActive(false);
    setLastTriggered(null);
  }, []);

  return (
    <SOSContext.Provider
      value={{
        isActive,
        loading,
        lastTriggered,
        triggerSOS,
        resetSOS,
      }}
    >
      {children}
    </SOSContext.Provider>
  );
};
