import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or "outlook", "yahoo", etc. based on your email provider
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

/**
 * Send an email
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} text - Plain text content
 * @param {string} [html] - HTML content (optional)
 * @returns {Promise<Object>} - Nodemailer response
 */
const sendEmail = async (to, subject, text, html = null) => {
  try {
    const mailOptions = {
      from: `"Naari Kavach" <${emailUser}>`,
      to,
      subject,
      text,
      ...(html ? { html } : {}), // ✅ Only include html if provided
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
