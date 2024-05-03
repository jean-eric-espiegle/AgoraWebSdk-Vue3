FROM node:lts-alpine as develop-stage

WORKDIR /agora-code

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
