// services/notificationService.js

import nodemailer from "nodemailer";
import twilio from "twilio";

// Load environment variables
const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  TWILIO_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
} = process.env;

// ---- Email Notification ----
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export const sendEmailNotification = async (to, subject, message) => {
  try {
    await transporter.sendMail({
      from: `"Naari Kavach" <${EMAIL_USER}>`,
      to,
      subject,
      text: message,
    });
    console.log("📧 Email notification sent to:", to);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw error;
  }
};

// ---- SMS Notification ----
const twilioClient = twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

export const sendSMSNotification = async (to, message) => {
  try {
    await twilioClient.messages.create({
      body: message,
      from: TWILIO_PHONE_NUMBER,
      to,
    });
    console.log("📱 SMS notification sent to:", to);
  } catch (error) {
    console.error("❌ Error sending SMS:", error.message);
    throw error;
  }
};

// ---- Push Notification (Optional, FCM or OneSignal) ----
// Example: Using Firebase Admin SDK
// import admin from "firebase-admin";
// admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

// export const sendPushNotification = async (deviceToken, title, body) => {
//   try {
//     await admin.messaging().send({
//       token: deviceToken,
//       notification: { title, body },
//     });
//     console.log("🔔 Push notification sent");
//   } catch (error) {
//     console.error("❌ Error sending push notification:", error.message);
//   }
// };

// ---- Unified Notification ----
export const sendNotification = async (options) => {
  const { type, to, subject, message, title, body } = options;

  switch (type) {
    case "email":
      return await sendEmailNotification(to, subject, message);
    case "sms":
      return await sendSMSNotification(to, message);
    // case "push":
    //   return await sendPushNotification(to, title, body);
    default:
      throw new Error("Unsupported notification type");
  }
};
