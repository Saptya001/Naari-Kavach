import React from "react";

export default function SafeZoneCard({ name, address }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        margin: "10px 0",
        background: "#f9f9f9",
      }}
    >
      <h4>{name}</h4>
      <p>{address}</p>
    </div>
  );
}
