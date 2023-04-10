FROM node:alpine

WORKDIR /app

COPY package*.json .
COPY .env.prod .env
COPY ./build .


RUN npm --version
RUN npm install --omit="dev"

CMD ["npm", "start"]
