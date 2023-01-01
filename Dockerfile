FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY ./build .

RUN yarn --prod

CMD ["node", "index.js"]
