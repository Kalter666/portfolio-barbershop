ARG port=4000

FROM node

WORKDIR /app/barbershop

COPY /dist /app/barbershop/dist

EXPOSE ${port}

ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL info
ENV PORT=${port}

CMD [ "node", "dist/server.js" ]