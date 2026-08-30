FROM node:16-alpine
RUN apk add --no-cache python3 make g++
WORKDIR /ui
ADD package.json package.json
ADD yarn.lock yarn.lock
RUN yarn install
ADD . .
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 3000