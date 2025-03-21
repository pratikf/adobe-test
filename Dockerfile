# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the ports for the web service and React app
EXPOSE 3000 8080

# Start both the web service and React app concurrently
CMD ["npm", "run", "start:concurrently"]
