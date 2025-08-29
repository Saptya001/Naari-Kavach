// src/middlewares/helmetMiddleware.js
import helmet from 'helmet';

const helmetMiddleware = () => {
  return helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"], // adjust if you use inline scripts
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'", 'https://maps.googleapis.com'], // for Google Maps API
        fontSrc: ["'self'", 'https:', 'data:'],
      },
    },
    crossOriginEmbedderPolicy: false, // depending on your frontend setup
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    referrerPolicy: { policy: 'no-referrer' },
    frameguard: { action: 'deny' },
  });
};

export default helmetMiddleware;
