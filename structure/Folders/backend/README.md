# NaariKavach Backend Documentation

## Overview
NaariKavach is a comprehensive application designed to provide safety and support for women. The backend is built using Node.js and Express, serving as the API layer for the application.

## Project Structure
The backend project is organized as follows:

```
backend
├── src
│   ├── controllers      # Contains business logic for API endpoints
│   ├── routes           # Defines API routes
│   ├── models           # Database models
│   └── app.js           # Entry point for the Node.js application
├── package.json         # NPM configuration file
└── README.md            # Documentation for the backend
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Navigate to the backend directory:
   ```
   cd NaariKavach/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will be running on `http://localhost:3000` by default.

### API Endpoints
The API endpoints will be defined in the `routes` directory. Each route will correspond to a specific functionality of the application.

### Testing
To run tests, use:
```
npm test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.