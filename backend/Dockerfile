FROM node:19-alpine3.16 AS builder

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build


FROM node:alpine

WORKDIR /app
COPY package*.json .
COPY .env.prod .env
COPY --from=builder /app/build .


RUN npm --version
RUN npm install --omit="dev"

CMD ["npm", "start"]
