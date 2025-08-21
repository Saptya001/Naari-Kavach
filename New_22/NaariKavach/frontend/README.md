# NaariKavach Frontend README

# NaariKavach Frontend

Welcome to the NaariKavach frontend application! This project is built using React.js and serves as the user interface for the NaariKavach platform.

## Project Structure

The frontend application is organized as follows:

```
frontend/
├── public/
│   └── index.html          # Main HTML file for the React.js application
├── src/
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React application
│   ├── components/         # Reusable UI components (e.g., Navbar, SOSButton)
│   ├── pages/              # Page-level views (e.g., Home, About, Profile)
│   ├── services/           # API calls related to authentication, SOS, and maps
│   ├── hooks/              # Custom hooks (e.g., useAuth, useSOS)
│   ├── context/            # React context providers (e.g., AuthContext)
│   ├── utils/              # Utility functions (e.g., encryption helpers)
│   ├── assets/             # Images, icons, and logos
│   ├── styles/             # CSS and Tailwind configuration
│   └── tests/              # Jest and React Testing Library tests
├── package.json            # Configuration file for npm
```

## Getting Started

To get started with the NaariKavach frontend application, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd NaariKavach/frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- User-friendly interface for accessing safety features.
- Real-time SOS alerts and notifications.
- Integration with backend services for user authentication and data management.

## Testing

To run the tests for the frontend application, use the following command:

```
npm test
```

## Contributing

We welcome contributions to the NaariKavach project! Please follow the guidelines in the main repository README for contributing.

## License

This project is licensed under the MIT License. See the LICENSE file for details.