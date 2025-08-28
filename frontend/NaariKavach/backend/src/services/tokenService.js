// src/services/tokenService.js
import jwt from 'jsonwebtoken';
import config from '../config/index.js';

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    config.JWT_SECRET,
    { expiresIn: '15m' } // short-lived access token
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    config.JWT_REFRESH_SECRET,
    { expiresIn: '7d' } // long-lived refresh token
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, config.JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
};

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, config.JWT_REFRESH_SECRET);
  } catch (err) {
    throw new Error('Invalid or expired refresh token');
  }
};

export default {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
  verifyRefreshToken,
};
