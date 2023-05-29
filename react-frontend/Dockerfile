# This Dockerfile is for generating an image for the react-frontend starter template.
# It will use node v14 for installation and runtime.

# Use the official image node v14 as the parent image.
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json file into the container.
COPY package*.json ./

# Install the dependencies for the application.
RUN npm install

# Copy the rest of the application code into the container.
COPY . .

# Build the application.
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Run the application
CMD ["npm", "start"]