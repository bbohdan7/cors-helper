FROM node:20.13.1

WORKDIR /app
COPY . .
RUN npm install --save
EXPOSE 5000

CMD node server.js