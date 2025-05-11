FROM node:23-alpine

# Create app directory 
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Copy the .env file
COPY .env ./
# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000


# Expose the port the app runs on
EXPOSE 3000


# Run the app
CMD [ "npm", "start"]