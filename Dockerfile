FROM node:16-alpine AS deps

WORKDIR /app
COPY package.json ./
run npm install --frozen-lockfile

FROM node:16-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:16-alpine AS runner
WORKDIR  /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]