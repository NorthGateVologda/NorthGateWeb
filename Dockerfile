FROM node:20

WORKDIR /opt

COPY package.json package-lock.json ./

RUN npm install

ADD app app
ADD entities entities
ADD public public
ADD shared shared
ADD widgets widgets
COPY next.config.js tsconfig.json ./

RUN npm run build

CMD ["npm", "run", "start"]
