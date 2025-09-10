import React, { useState } from "react";
import { sendSOS } from "../services";

export default function SOS() {
  const [status, setStatus] = useState("");

  const handleSOS = async () => {
    try {
      // Fake location for now
      const location = { lat: 22.5726, lng: 88.3639 }; 
      const res = await sendSOS(location);
      setStatus(res.message || "✅ SOS Alert Sent!");
    } catch (err) {
      setStatus("⚠️ Failed to send SOS alert.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🚨 SOS Emergency</h2>
      <button
        onClick={handleSOS}
        style={{
          backgroundColor: "red",
          color: "white",
          fontSize: "24px",
          padding: "20px 40px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        SEND SOS
      </button>
      {status && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{status}</p>}
    </div>
  );
}