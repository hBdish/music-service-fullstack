FROM node:20-alpine as build
LABEL authors="maksim"
WORKDIR /usr/src/app

COPY ../server-music/package*.json ./
RUN npm ci
COPY ../server-music/ .
RUN npm run build

FROM node:20-alpine
LABEL authors="maksim"
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY ../server-music/package*.json ./
RUN npm ci --omit=dev

CMD [ "node", "dist/main.js" ]