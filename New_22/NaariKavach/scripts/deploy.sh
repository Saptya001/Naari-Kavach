#!/bin/bash

# This script is used to deploy the NaariKavach application.

# Set environment variables
export NODE_ENV=production

# Build the frontend
echo "Building the frontend..."
cd frontend
npm install
npm run build
cd ..

# Build the backend
echo "Building the backend..."
cd backend
npm install
cd ..

# Deploy the AI service
echo "Deploying the AI service..."
cd nlp_service
pip install -r requirements.txt
cd ..

# Start the services using Docker Compose
echo "Starting services with Docker Compose..."
docker-compose up -d

echo "Deployment completed successfully!"