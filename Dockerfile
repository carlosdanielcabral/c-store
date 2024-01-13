FROM node:18.13.0-alpine
WORKDIR /app/api
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT ["npm", "start"]
EXPOSE 3001
