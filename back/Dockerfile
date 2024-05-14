FROM node:18.16.0-alpine
WORKDIR /app
RUN npm install -g migrate-mongo nodemon
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
# Command to run the application
CMD ["npm", "run","dev"]
