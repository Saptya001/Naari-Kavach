# API Documentation for NaariKavach

## Overview
The NaariKavach API provides endpoints for the frontend application to interact with the backend services, including user authentication, SOS alerts, and chatbot functionalities. This document outlines the available API endpoints, their request and response formats, and usage examples.

## Base URL
The base URL for the API is:
```
http://localhost:5000/api
```

## Authentication

### Login
- **Endpoint:** `/auth/login`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - **Success (200):**
    ```json
    {
      "token": "jwt_token_here",
      "user": {
        "id": "user_id",
        "email": "user@example.com"
      }
    }
    ```
  - **Error (401):**
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

### Register
- **Endpoint:** `/auth/register`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - **Success (201):**
    ```json
    {
      "message": "User registered successfully"
    }
    ```
  - **Error (400):**
    ```json
    {
      "message": "Email already exists"
    }
    ```

## SOS Alerts

### Create SOS Alert
- **Endpoint:** `/sos`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "userId": "user_id",
    "location": {
      "latitude": "12.345678",
      "longitude": "98.765432"
    },
    "message": "Need help!"
  }
  ```
- **Response:**
  - **Success (201):**
    ```json
    {
      "message": "SOS alert created successfully"
    }
    ```
  - **Error (400):**
    ```json
    {
      "message": "Invalid location data"
    }
    ```

## Chatbot

### Get Response
- **Endpoint:** `/chatbot/respond`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "message": "Hello, I need assistance."
  }
  ```
- **Response:**
  - **Success (200):**
    ```json
    {
      "response": "How can I assist you today?"
    }
    ```
  - **Error (500):**
    ```json
    {
      "message": "Internal server error"
    }
    ```

## Error Handling
All error responses will include a message field that provides information about the error.

## Conclusion
This API documentation provides a comprehensive overview of the endpoints available in the NaariKavach project. For further details, please refer to the individual service documentation or the README files in the respective directories.