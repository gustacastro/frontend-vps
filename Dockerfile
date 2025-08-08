# Multi-stage build otimizado para Vite/React
# Usando Debian para melhor compatibilidade com dependências nativas
FROM node:20-slim AS base

# Instalar dependências do sistema necessárias para build
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Stage 1: Instalar dependências
FROM base AS dependency-installer
WORKDIR /app
COPY package*.json ./

# Instalar dependências sem .npmrc primeiro
RUN npm install --legacy-peer-deps --force

# Instalar manualmente dependência específica do rollup
RUN npm install @rollup/rollup-linux-x64-gnu --save-optional --no-audit || echo "Rollup dependency failed to install"

# Stage 2: Build da aplicação
FROM base AS builder
WORKDIR /app

# Copiar node_modules do stage anterior
COPY --from=dependency-installer /app/node_modules ./node_modules

# Copiar código fonte
COPY . .

# Reinstalar rollup para resolver dependência nativa (fix do npm bug)
RUN rm -rf node_modules/@rollup node_modules/.cache package-lock.json 2>/dev/null || true
RUN npm install @rollup/rollup-linux-x64-gnu --legacy-peer-deps --no-audit --force || true

# Tentar instalar LightningCSS manualmente
RUN npm install lightningcss-linux-x64-gnu --save-optional --force || true
RUN npm install @parcel/watcher-linux-x64-glibc --save-optional --force || true

# Debug: Verificar se os binaries estão disponíveis
RUN find node_modules -name "*.node" | head -10 || true

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
