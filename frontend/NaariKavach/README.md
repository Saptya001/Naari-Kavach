# NaariKavach Project

NaariKavach is a comprehensive application designed to provide safety and support for women. The project consists of three main components: a React frontend, a Node.js backend, and a Python AI service. 

## Project Structure

```
NaariKavach
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── ai-service
│   ├── src
│   │   ├── main.py
│   │   └── utils.py
│   ├── requirements.txt
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm for the frontend and backend
- Python 3.x for the AI service
- MongoDB or any other database for the backend (if applicable)

### Installation

1. **Frontend**
   - Navigate to the `frontend` directory.
   - Run `npm install` to install the necessary dependencies.
   - Start the development server with `npm start`.

2. **Backend**
   - Navigate to the `backend` directory.
   - Run `npm install` to install the necessary dependencies.
   - Start the server with `node src/app.js`.

3. **AI Service**
   - Navigate to the `ai-service` directory.
   - Install the required Python packages using `pip install -r requirements.txt`.
   - Run the AI service with `python src/main.py`.

### Usage

- The frontend will provide a user interface for interaction.
- The backend will handle API requests and responses.
- The AI service will provide intelligent responses based on user input.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.