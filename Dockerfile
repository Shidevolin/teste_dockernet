FROM alpine
RUN apk add git
RUN apk add --update nodejs nodejs-npm
RUN npm i pm2 --global