import React, { useState } from "react";
import { getChatReply } from "../services";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);
    try {
      const res = await getChatReply(message);
      setChat([...chat, { sender: "user", text: message }, { sender: "bot", text: res.reply }]);
      setMessage("");
    } catch (err) {
      setChat([...chat, { sender: "bot", text: "⚠️ Chat service unavailable." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Safety Chatbot</h2>
      <div style={{ border: "1px solid #ccc", height: "300px", padding: "10px", overflowY: "auto" }}>
        {chat.map((c, i) => (
          <p key={i} style={{ textAlign: c.sender === "user" ? "right" : "left" }}>
            <b>{c.sender === "user" ? "You" : "AI"}:</b> {c.text}
          </p>
        ))}
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ width: "70%", padding: "8px" }}
        />
        <button onClick={sendMessage} style={{ padding: "8px 12px", marginLeft: "8px" }}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}