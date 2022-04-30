FROM node:14.18.1

WORKDIR /usr/src/app

COPY ./package* ./
COPY ./yarn* ./

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn start