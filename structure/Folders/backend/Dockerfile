# Use Node.js LTS image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the backend source code
COPY . .

# Expose backend API port (change if your backend uses another port)
EXPOSE 5000

# Start the app
CMD ["node", "src/app.js"]
