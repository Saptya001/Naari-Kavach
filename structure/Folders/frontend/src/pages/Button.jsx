import React from "react";

export default function Button({ onClick, children, color = "blue" }) {
  const styles = {
    backgroundColor: color,
    color: "white",
    fontSize: "18px",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
}