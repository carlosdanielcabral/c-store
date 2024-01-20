FROM node:18.13.0-alpine
WORKDIR /app/api
COPY package*.json ./
RUN npm install
RUN chmod 777 node_modules
COPY . .
ENTRYPOINT ["npm", "start"]
EXPOSE 3001
