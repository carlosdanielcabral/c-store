FROM node:18-alpine
WORKDIR /app/api
COPY package*.json ./
RUN npm install
COPY . .
RUN chown -R node:node /app/api/node_modules
ENTRYPOINT ["npm", "start"]
EXPOSE 3001
