// src/services/emailService.js

const nodemailer = require("nodemailer");

// Load environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,       // e.g., smtp.gmail.com
  port: process.env.EMAIL_PORT,       // e.g., 465 (SSL) or 587 (TLS)
  secure: process.env.EMAIL_SECURE === "true", // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,     // Your email address
    pass: process.env.EMAIL_PASS,     // Your email password or app password
  },
});

/**
 * Send an email
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} text - Plain text content
 * @param {string} html - Optional HTML content
 */
const sendEmail = async (to, subject, text, html = null) => {
  try {
    const info = await transporter.sendMail({
      from: `"Naari Kavach Alerts" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html: html || text,
    });

    console.log(`✅ Email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw new Error("Failed to send email");
  }
};

module.exports = { sendEmail };
