FROM node:20-alpine3.17

COPY ./app /app

WORKDIR /app

RUN ["npm", "i", "-g", "npm"]
RUN ["npm", "ci"]

ENTRYPOINT npx next telemetry disable && npm run dev
