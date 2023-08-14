
# Development stage
FROM node:14.19-alpine as dev-stage
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Build stage
FROM nginx:1.17-alpine as production-stage
COPY --from=dev-stage /app/dist/spa /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
