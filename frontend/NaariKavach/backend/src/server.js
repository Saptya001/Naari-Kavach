// src/server.js

const http = require("http");
const app = require("./app"); // Import your Express app
require("dotenv").config();

// Get port from environment or default
const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

// Start listening
server.listen(PORT, () => {
  console.log(`🚀 Naari Kavach backend running on port ${PORT}`);
});

// Handle unexpected errors
server.on("error", (error) => {
  console.error("❌ Server error:", error);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection:", reason);
  // Optionally exit process
  process.exit(1);
});
