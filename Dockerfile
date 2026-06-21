# Use an official Node.js runtime as a parent image
# Using Alpine Linux for a smaller image size
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package*.json ./

# Install project dependencies (including devDependencies needed for build and start script)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the client-side assets (JS bundle and CSS)
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]