# Use official Node.js image
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# Copy app files
COPY . .

# Copy .env
COPY .env .env

# Build the app
RUN npm run build

# -- Production Image --
FROM node:22-alpine AS runner

WORKDIR /app

# Install only production deps
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./

# Expose port
EXPOSE 3000

# Load env and start app
CMD ["npm", "start"]
