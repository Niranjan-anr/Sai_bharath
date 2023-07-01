# Base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose a port (if your application listens on a specific port)
EXPOSE 3001

# Set the command to run your application
CMD ["npm", "start"]
