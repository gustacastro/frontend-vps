# Multi-stage build otimizado para Vite/React
FROM node:20-alpine AS base

# Instalar dependências do sistema necessárias para build
RUN apk add --no-cache libc6-compat python3 make g++

# Stage 1: Instalar dependências
FROM base AS dependency-installer
WORKDIR /app
COPY package*.json .npmrc ./

RUN npm install --legacy-peer-deps

# Stage 2: Build da aplicação
FROM base AS builder
WORKDIR /app

# Copiar node_modules do stage anterior
COPY --from=dependency-installer /app/node_modules ./node_modules

# Copiar código fonte
COPY . .

# Variáveis de ambiente para build
ARG VITE_API_BASE_URL
ARG VITE_APP_NAME
ARG VITE_APP_VERSION
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_APP_NAME=$VITE_APP_NAME
ENV VITE_APP_VERSION=$VITE_APP_VERSION

# Build da aplicação
RUN npm run build

# Stage 3: Nginx runner
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Instalar curl para health check
RUN apk add --no-cache curl

# Copiar configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar arquivos buildados do stage anterior
COPY --from=builder /app/dist ./

# Expor porta 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
