FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ADD package.json /app/package.json

RUN npm install
RUN npm install nodemon -g

ADD . /app

CMD ["npm", "start"]
