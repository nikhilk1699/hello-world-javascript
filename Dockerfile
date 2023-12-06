# Stage 1: Build stage
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production stage
FROM ubuntu:latest
WORKDIR /app
COPY --from=build /app .

# Install Node.js and NPM
RUN apt-get update && apt-get install -y nodejs npm

# Install Nodemon globally
RUN npm install -g nodemon

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application using Nodemon
CMD ["nodemon", "index.js"]

