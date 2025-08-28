// src/services/smsService.js

const twilio = require("twilio");

// Load environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

/**
 * Send an SMS using Twilio
 * @param {string} to - Recipient phone number
 * @param {string} message - Message body
 */
const sendSMS = async (to, message) => {
  try {
    const sms = await client.messages.create({
      body: message,
      from: fromNumber,
      to,
    });

    console.log(`✅ SMS sent successfully to ${to}: SID ${sms.sid}`);
    return sms;
  } catch (error) {
    console.error("❌ Error sending SMS:", error.message);
    throw new Error("Failed to send SMS");
  }
};

module.exports = { sendSMS };
