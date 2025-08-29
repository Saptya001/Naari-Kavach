// src/middlewares/corsMiddleware.js
import cors from 'cors';
import config from '../config/index.js';

const allowedOrigins = [
  'http://localhost:3000', // your local frontend
  'https://your-frontend-domain.com', // production frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: This origin is not allowed'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // allow cookies
  optionsSuccessStatus: 200,
};

const corsMiddleware = () => cors(corsOptions);

export default corsMiddleware;
