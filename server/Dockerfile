FROM node:16-alpine
WORKDIR /app
ADD package.json package.json
ADD yarn.lock yarn.lock
RUN yarn install
ADD . .
RUN yarn build
VOLUME ["/app/upload"]
CMD ["yarn", "start:prod"]
EXPOSE 8080