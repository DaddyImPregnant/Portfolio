# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY . ./

RUN npm install --force
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run build

# start app
CMD ["npm", "start"]