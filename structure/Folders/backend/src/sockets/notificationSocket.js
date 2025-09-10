// src/sockets/notificationSocket.js
const { Server } = require("socket.io");

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*", // you can restrict this later (e.g., frontend domain)
      methods: ["GET", "POST"],
    },
  });

  console.log("✅ Socket.io initialized for real-time notifications");

  io.on("connection", (socket) => {
    console.log(`🔌 User connected: ${socket.id}`);

    // join a room (e.g., userId) for private notifications
    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log(`📌 User ${socket.id} joined room: ${room}`);
    });

    // leave a room
    socket.on("leaveRoom", (room) => {
      socket.leave(room);
      console.log(`🚪 User ${socket.id} left room: ${room}`);
    });

    // disconnect event
    socket.on("disconnect", () => {
      console.log(`❌ User disconnected: ${socket.id}`);
    });
  });
};

// function to emit notification
const sendNotification = (room, message) => {
  if (io) {
    io.to(room).emit("notification", message);
    console.log(`📢 Notification sent to ${room}:`, message);
  } else {
    console.error("⚠️ Socket.io not initialized!");
  }
};

module.exports = { initSocket, sendNotification };
