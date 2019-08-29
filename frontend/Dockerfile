FROM node:latest

WORKDIR /frontend

COPY ./package-lock.json ./
COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]