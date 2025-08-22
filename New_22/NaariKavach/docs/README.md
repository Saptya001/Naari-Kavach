# NaariKavach Project Documentation

## Overview
NaariKavach is a comprehensive application designed to enhance safety and security through a combination of a frontend React.js application, a backend Node.js + Express API, and a Python-based NLP chatbot service. This project aims to provide users with features such as SOS alerts, user authentication, and real-time communication.

## Project Structure
The project is organized into several key directories:

- **frontend/**: Contains the React.js application.
- **backend/**: Contains the Node.js + Express API.
- **nlp_service/**: Contains the Python NLP and chatbot service.
- **infra/**: Contains deployment infrastructure and configuration files.
- **docs/**: Contains documentation for the project.
- **scripts/**: Contains automation scripts for various tasks.
- **tests/**: Contains end-to-end tests and other testing resources.

## Getting Started
To get started with the NaariKavach project, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd NaariKavach
   ```

2. **Set Up the Frontend**
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

3. **Set Up the Backend**
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Start the server:
     ```bash
     npm start
     ```

4. **Set Up the NLP Service**
   - Navigate to the `nlp_service` directory.
   - Install dependencies:
     ```bash
     cd nlp_service
     pip install -r requirements.txt
     ```
   - Run the service:
     ```bash
     python app.py
     ```

5. **Deployment**
   - Refer to the `infra` directory for Docker and Kubernetes configurations.
   - Follow the `DEPLOYMENT_GUIDE.md` in the `docs` directory for detailed deployment instructions.

## Documentation
For detailed documentation on the API, system design, and database schema, please refer to the respective markdown files in the `docs` directory.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.