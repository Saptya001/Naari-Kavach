// src/models/Alert.js

const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    sos: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SOS", // link to the SOS event
      required: true,
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // who receives the alert (family, admin, etc.)
      required: true,
    },
    type: {
      type: String,
      enum: ["sms", "email", "push"],
      default: "sms",
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["sent", "failed", "pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alert", alertSchema);
