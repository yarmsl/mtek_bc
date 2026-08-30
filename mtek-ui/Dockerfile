FROM node:16-alpine
WORKDIR /ui
ADD package.json package.json
ADD yarn.lock yarn.lock
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1
RUN yarn install
ADD . .
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 3000