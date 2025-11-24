# Use the official Node.js image as the base image for the build stage
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy application source files to the working directory
COPY . .

# Build the application
RUN npm run build

# Use a smaller image for the production stage
FROM node:18-slim AS production

# Set the working directory inside the production container
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app .

# Start the application
CMD [ "node", "dist/index.js" ]
