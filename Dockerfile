ARG port=4000

FROM node

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build:ssr

EXPOSE ${port}

ENV NPM_CONFIG_LOGLEVEL info
ENV PORT=${port}
ENV NODE_ENV=production

CMD [ "node", "dist/server.js" ]
