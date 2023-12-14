FROM node:20-alpine as build
LABEL authors="maksim"
WORKDIR /usr/src/app

COPY ../client-music/package*.json ./
RUN npm ci
COPY ../client-music/ .

CMD ["npm", "start"]