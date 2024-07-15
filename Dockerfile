# Use a lightweight base image
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies only (using --frozen-lockfile if using yarn)
RUN npm i --no-audit --no-found --no-optional --force

# Copy the rest of the application code to the working directory
COPY . .

# Build the Strapi project
RUN npm run build

# Use a lightweight base image for the final image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app /app

# Expose the port Strapi will run on
EXPOSE 1337

# Start the Strapi application
CMD ["npm", "run","develop"]
