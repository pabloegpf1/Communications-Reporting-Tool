FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install nodemon -g
RUN npm install --save sequelize
RUN npm install --save sequelize-cli
RUN npm install --save pg pg-hstore

COPY . .

EXPOSE 3000
CMD [ "npm","run", "dev" ]
