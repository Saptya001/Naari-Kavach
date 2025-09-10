import { useContext } from "react";
import { SOSContext } from "../context/SOSContext";

// ✅ Custom hook for accessing SOS state & actions
const useSOS = () => {
  const context = useContext(SOSContext);

  if (!context) {
    throw new Error("useSOS must be used within an SOSProvider");
  }

  return context;
};

export default useSOS;
