import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#222",
        padding: "12px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Chatbot
      </Link>
      <Link to="/sos" style={{ color: "white", textDecoration: "none" }}>
        SOS
      </Link>
      <Link to="/safezones" style={{ color: "white", textDecoration: "none" }}>
        Safe Zones
      </Link>
    </nav>
  );
}
