// src/docs/swaggerConfig.js
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const swaggerDocs = (app) => {
  // Swagger UI route
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  console.log("✅ Swagger Docs available at http://localhost:5000/api-docs");
};

module.exports = swaggerDocs;