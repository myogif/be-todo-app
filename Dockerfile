FROM node:12.18.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install \
    && npm run build


COPY . .

CMD [ "npm", "start" ]