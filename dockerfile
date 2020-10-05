FROM node:12.18.3

WORKDIR /usr/src/app/user-web

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm","start" ]
