import React from "react";

export default function ChatMessage({ sender, text }) {
  const isUser = sender === "user";
  return (
    <div
      style={{
        textAlign: isUser ? "right" : "left",
        margin: "8px 0",
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "10px",
          borderRadius: "10px",
          background: isUser ? "#007bff" : "#f1f1f1",
          color: isUser ? "white" : "black",
          maxWidth: "70%",
        }}
      >
        <b>{isUser ? "You" : "AI"}:</b> {text}
      </span>
    </div>
  );
}
