FROM node:14

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3001

RUN apt-get update && \
    apt-get install curl -y

RUN npm install -g pm2

CMD pm2-runtime start npm -- start