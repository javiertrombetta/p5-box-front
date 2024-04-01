FROM node:20.12.0-alpine3.19

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002 19000
# ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.168.50.119"

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest
RUN yarn add @expo/config@8.1.1
RUN yarn add @expo/metro-config@0.10.0

RUN mkdir /opt/boxapp
WORKDIR /opt/boxapp
ENV PATH /opt/boxapp/.bin:$PATH
COPY package.json package-lock.json ./
RUN npm install --only=production && npm cache clean --force

WORKDIR /opt/boxapp/app
COPY . .

ENTRYPOINT ["npm", "run"]
CMD ["web"]
