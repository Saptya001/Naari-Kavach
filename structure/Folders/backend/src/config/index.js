// src/config/index.js
import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';

// Load .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Define validation schema for critical environment variables
const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().default(5000),

  MONGO_URI: Joi.string().required(),
  MONGO_URI_TEST: Joi.string().required(),

  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('7d'),

  EMAIL_HOST: Joi.string().required(),
  EMAIL_PORT: Joi.number().required(),
  EMAIL_USER: Joi.string().required(),
  EMAIL_PASS: Joi.string().required(),

  TWILIO_SID: Joi.string().required(),
  TWILIO_AUTH_TOKEN: Joi.string().required(),
  TWILIO_PHONE_NUMBER: Joi.string().required(),

  GOOGLE_MAPS_API_KEY: Joi.string().required(),

  REDIS_HOST: Joi.string().default('127.0.0.1'),
  REDIS_PORT: Joi.number().default(6379),
  REDIS_PASSWORD: Joi.string().allow(''),

  MAX_SOS_RADIUS: Joi.number().default(5),
  PASSWORD_MIN_LENGTH: Joi.number().default(8),
  SUPPORT_EMAIL: Joi.string().default('support@naarikavach.org'),
})
  .unknown()
  .required();

// Validate process.env
const { value: envVars, error } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Export config object
const config = {
  nodeEnv: envVars.NODE_ENV,
  port: envVars.PORT,

  mongoURI: envVars.MONGO_URI,
  mongoURI_test: envVars.MONGO_URI_TEST,

  jwtSecret: envVars.JWT_SECRET,
  jwtExpiresIn: envVars.JWT_EXPIRES_IN,

  email: {
    host: envVars.EMAIL_HOST,
    port: envVars.EMAIL_PORT,
    user: envVars.EMAIL_USER,
    pass: envVars.EMAIL_PASS,
  },

  twilio: {
    sid: envVars.TWILIO_SID,
    authToken: envVars.TWILIO_AUTH_TOKEN,
    phoneNumber: envVars.TWILIO_PHONE_NUMBER,
  },

  googleMapsAPIKey: envVars.GOOGLE_MAPS_API_KEY,

  redis: {
    host: envVars.REDIS_HOST,
    port: envVars.REDIS_PORT,
    password: envVars.REDIS_PASSWORD,
  },

  app: {
    maxSosRadius: envVars.MAX_SOS_RADIUS,
    passwordMinLength: envVars.PASSWORD_MIN_LENGTH,
    supportEmail: envVars.SUPPORT_EMAIL,
  },
};

export default config;
