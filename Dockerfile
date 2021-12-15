FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm ci
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/next.config.js ./
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
# WORKAROUND - Copying the pages twice isn't really nice
COPY --from=build /build/i18n.json ./i18n.json
COPY --from=build /build/.next/server/pages ./pages

RUN npm install next

CMD npm run start