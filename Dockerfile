FROM node:13.12.0-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
COPY package.json ./

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

RUN npm run build

FROM nginx:stable-alpine as server
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]