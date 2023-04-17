FROM node:19-alpine3.16 AS builder

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html/
