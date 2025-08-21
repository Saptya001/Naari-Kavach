#!/bin/bash

# This script sets up the environment for the NaariKavach project.

# Update package lists
echo "Updating package lists..."
sudo apt-get update

# Install Node.js and npm
echo "Installing Node.js and npm..."
sudo apt-get install -y nodejs npm

# Install Python and pip
echo "Installing Python and pip..."
sudo apt-get install -y python3 python3-pip

# Install required Python packages
echo "Installing Python packages..."
pip3 install -r ../nlp_service/requirements.txt

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd ../frontend
npm install

# Install backend dependencies
echo "Installing backend dependencies..."
cd ../backend
npm install

echo "Environment setup complete."