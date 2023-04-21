FROM node:19-alpine3.16 AS builder

WORKDIR /app

COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build


FROM node:alpine

WORKDIR /app
COPY package*.json .
RUN npm ci --omit="dev"

COPY .env.prod .env
COPY --from=builder /app/build .

CMD ["npm", "start"]
