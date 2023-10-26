# Use the official Node.js image
FROM node:18

# Create and set the working directory in the container
RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

# Copy the common module, package.json, and yarn.lock before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY common /usr/src/app/common
COPY client/package*.json /usr/src/app/client/
COPY yarn.lock /usr/src/app/
COPY client/tsconfig.json /usr/src/app/client/

# Copy local code to the container image
COPY client /usr/src/app/client

# Install dependencies
RUN yarn install
RUN yarn build

EXPOSE 3000

# Specify the command to run on container start
CMD [ "yarn", "start" ]
