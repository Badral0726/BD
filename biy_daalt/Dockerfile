FROM node:14.16.0-alpine3.13

#RUN addgroup app && adduser -S -G app app
#USER app

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV WATCHPACK_POLLING=true
EXPOSE 3000 

CMD ["npm", "start"]