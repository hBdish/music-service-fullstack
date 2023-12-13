FROM node:20 as build
LABEL authors="maksim"

WORKDIR /usr/src/app

COPY /package*.json ./

RUN npm install

COPY / .

RUN npm run dev
