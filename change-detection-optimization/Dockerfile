## STEP 1 build static website
#FROM node:alpine as builder
#RUN apk update && apk add --no-cache make git
## Create app directory
#WORKDIR /app
## Install app dependencies
#COPY package.json package-lock.json  /app/
#RUN cd /app && npm install
## Copy project files into the docker image
#COPY .  /app
#RUN cd /app && npm run build:prod

# STEP 2 build a small nginx image with static website
FROM nginx:stable-alpine

# Create user
# ensure www-data user exists
RUN set -x ; \
  addgroup -g 82 -S www-data ; \
  adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/mime.types /etc/nginx/mime.types
COPY ./nginx/site.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder /app/dist/change-detection-optimization /var/www/htdocs
COPY ./dist/change-detection-optimization /var/www/htdocs

RUN touch /var/run/nginx.pid && \
  chown -R www-data:www-data /var/run/nginx.pid && \
  chown -R www-data:www-data /var/cache/nginx

USER www-data
