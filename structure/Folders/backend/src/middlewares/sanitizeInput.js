// src/middlewares/sanitizeInput.js
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';

const sanitizeInput = (app) => {
  // Prevent NoSQL injection
  app.use(
    mongoSanitize({
      replaceWith: '_', // replaces prohibited characters with _
    })
  );

  // Prevent XSS attacks
  app.use(xss());
};

export default sanitizeInput;
