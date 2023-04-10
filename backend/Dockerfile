FROM node:19-alpine3.16 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
run npm run build


FROM node:alpine

WORKDIR /app

COPY package*.json .
COPY .env.prod .env
COPY --from=builder /app/build .


RUN npm --version
RUN npm install --omit="dev"

CMD ["npm", "start"]
