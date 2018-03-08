FROM node:8-alpine

MAINTAINER Jean-Philippe Lemelin

EXPOSE 3000

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . /opt/app

RUN npm install && npm cache clean --force

CMD [ "node", "index.js" ]
