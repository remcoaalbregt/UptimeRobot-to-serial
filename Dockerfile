FROM node:10-alpine AS deps
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn --silent --production

FROM deps AS files
WORKDIR /opt/app
COPY . ./

FROM files AS build
WORKDIR /opt/app
RUN yarn --silent
RUN yarn build:production

FROM node:10-alpine AS release
WORKDIR /opt/app
COPY --from=deps /opt/app/node_modules ./node_modules
COPY --from=build /opt/app/dist .
CMD ["node", "index.js"]
