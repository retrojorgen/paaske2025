# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the root package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies for the root package.json
RUN yarn install

# Copy the entire project into the container
COPY . .

# Expose the port used by the back-end (adjust if necessary)
EXPOSE 4000

ENV VITE_API_BASE_URL=

# Run the start script from the root package.json
CMD ["yarn", "start"]