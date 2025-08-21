# NaariKavach Project

NaariKavach is a comprehensive application designed to enhance safety and security for individuals, particularly women. The project consists of a frontend built with React.js, a backend powered by Node.js and Express, and an AI service utilizing Python for natural language processing and chatbot functionalities.

## Project Structure

The project is organized into several key directories:

- **frontend/**: Contains the React.js application.
  - **public/**: Static files including the main HTML file.
  - **src/**: Source code for the React application, including components, pages, services, hooks, context, utils, assets, styles, and tests.
  - **package.json**: Configuration file for npm dependencies and scripts.
  - **README.md**: Documentation for the frontend application.

- **backend/**: Contains the Node.js and Express API.
  - **src/**: Source code for the backend, including app setup, routes, controllers, models, middleware, utils, config, workers, logs, and tests.
  - **package.json**: Configuration file for npm dependencies and scripts.
  - **README.md**: Documentation for the backend application.

- **nlp_service/**: Contains the Python-based NLP and chatbot service.
  - **app.py**: Main entry point for the AI service.
  - **requirements.txt**: Lists Python dependencies.
  - **models/**: Directory for storing trained machine learning models.
  - **README.md**: Documentation for the NLP service.

- **infra/**: Contains infrastructure-related files for deployment.
  - **docker/**: Dockerfiles for building the frontend, backend, and AI service.
  - **k8s/**: Kubernetes deployment configurations.
  - **ci-cd/**: CI/CD pipeline configurations for GitHub Actions.

- **docs/**: Documentation for the project, including API specifications, system design, database schema, deployment guide, and security policies.

- **scripts/**: Automation scripts for database seeding, migrations, and backups.

- **tests/**: End-to-end tests and documentation for the test suite.

## Getting Started

To get started with the NaariKavach project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd NaariKavach
   ```

2. **Set up the environment**:
   - Copy the `.env.example` to `.env` and fill in the required environment variables.

3. **Install dependencies**:
   - For the frontend:
     ```
     cd frontend
     npm install
     ```
   - For the backend:
     ```
     cd backend
     npm install
     ```
   - For the NLP service:
     ```
     cd nlp_service
     pip install -r requirements.txt
     ```

4. **Run the applications**:
   - Start the frontend:
     ```
     cd frontend
     npm start
     ```
   - Start the backend:
     ```
     cd backend
     npm start
     ```
   - Start the NLP service:
     ```
     cd nlp_service
     python app.py
     ```

5. **Run tests**:
   - For frontend tests:
     ```
     cd frontend
     npm test
     ```
   - For backend tests:
     ```
     cd backend
     npm test
     ```
   - For NLP service tests:
     ```
     cd nlp_service
     pytest
     ```

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.