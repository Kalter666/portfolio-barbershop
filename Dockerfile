ARG port=4000

FROM node

WORKDIR /app/ritual

COPY /dist /app/ritual/dist

EXPOSE ${port}

ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL info
ENV PORT=${port}

CMD [ "node", "dist/server.js" ]