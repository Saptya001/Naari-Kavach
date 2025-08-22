# NaariKavach Backend Documentation

## Overview
The NaariKavach backend is built using Node.js and Express. It serves as the API layer for the NaariKavach application, handling requests from the frontend and providing necessary data and services.

## Directory Structure
- **src/**: Contains the main application code.
  - **app.js**: Entry point for the Express application.
  - **routes/**: Defines the API endpoints.
  - **controllers/**: Contains business logic for handling requests.
  - **models/**: Defines data models for the application.
  - **middleware/**: Contains middleware functions for request processing.
  - **utils/**: Utility functions for various tasks.
  - **config/**: Configuration files for database and services.
  - **workers/**: Background job processing.
  - **logs/**: Directory for storing application logs.
  - **tests/**: Contains tests for the application.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd NaariKavach/backend
   ```
2. Install dependencies:
   ```
   npm install
   ```

## Running the Application
To start the backend server, run:
```
npm start
```
The server will be running on `http://localhost:3000` by default.

## API Documentation
Refer to the `docs/API_SPEC.md` file for detailed API specifications and usage.

## Testing
To run the tests, use:
```
npm test
```

## Environment Variables
Create a `.env` file in the root of the backend directory and define the necessary environment variables. Refer to `.env.example` for a template.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for discussion.

## License
This project is licensed under the MIT License. See the LICENSE file for details.