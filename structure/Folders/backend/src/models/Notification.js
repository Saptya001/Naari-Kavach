// models/Notification.js
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    user: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
    },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    contacts: [
      {
        name: { type: String },
        phone: { type: String },
        email: { type: String },
      },
    ],
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["sent", "failed"],
      default: "sent",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
