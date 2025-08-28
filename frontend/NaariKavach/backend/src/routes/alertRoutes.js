// src/routes/alertRoutes.js
import express from 'express';
import alertController from '../controllers/alertController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import validateRequest from '../middlewares/validateRequest.js';
import alertValidation from '../validations/alertValidation.js';

const router = express.Router();

// @route   POST /api/alerts
// @desc    Create a new alert
// @access  Private
router.post(
  '/',
  authMiddleware,
  validateRequest(alertValidation.createAlert),
  alertController.createAlert
);

// @route   GET /api/alerts
// @desc    Get all alerts for the logged-in user
// @access  Private
router.get('/', authMiddleware, alertController.getAlerts);

// @route   GET /api/alerts/:id
// @desc    Get a specific alert by ID
// @access  Private
router.get('/:id', authMiddleware, alertController.getAlertById);

// @route   DELETE /api/alerts/:id
// @desc    Delete an alert by ID
// @access  Private
router.delete('/:id', authMiddleware, alertController.deleteAlert);

export default router;
