FROM node:alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
COPY package.json ./

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

RUN npm run prod

FROM nginx:stable-alpine as server
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]