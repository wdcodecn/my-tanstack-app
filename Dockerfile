FROM node:20-slim
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3000
ENV HOST=0.0.0.0
ENV PORT=3000
CMD ["node", "dist/server/server.js"]
