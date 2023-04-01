FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

# sudo docker build . -t tkdgur1756/cok-co:0.1