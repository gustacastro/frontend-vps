# Troubleshooting - Deploy no Coolify

## Problemas Comuns e Soluções

### ❌ Build falha com "npm ci --only=production" 
**Erro**: `failed to solve: process "/bin/sh -c npm ci --only=production" did not complete successfully: exit code 1`

**Causa**: Para projetos React/Vite, precisamos das devDependencies (TypeScript, Vite, etc.) para fazer o build.

**Solução**: ✅ Usar `npm ci` (sem --only=production) no Dockerfile.

### ❌ Node-gyp ou compilação nativa falha
**Erro**: Erros relacionados a `node-gyp`, `python`, `make` ou `g++`

**Solução**: ✅ Instalar dependências de build no Alpine:
```dockerfile
RUN apk add --no-cache python3 make g++
```

### ❌ Cache do npm não funciona
**Problema**: Build sempre reinstala dependências

**Solução**: ✅ Copiar `package*.json` antes do código fonte:
```dockerfile
COPY package*.json ./
RUN npm ci
COPY . .
```

### ❌ Roteamento SPA não funciona (404 em rotas)
**Problema**: Páginas retornam 404 ao acessar diretamente

**Solução**: ✅ Nginx configurado com `try_files $uri $uri/ /index.html`

### ❌ Variáveis de ambiente não carregam
**Problema**: Variáveis `VITE_*` não estão disponíveis

**Causa**: Variáveis do Vite são incluídas no build-time, não runtime.

**Solução**: ✅ Definir no Coolify e certificar-se que começam com `VITE_`

### ❌ Build muito lento
**Problemas**: Build demora muito tempo

**Soluções**:
- ✅ Usar `npm ci --frozen-lockfile` para builds determinísticos
- ✅ Multi-stage build para imagem final menor
- ✅ .dockerignore para excluir arquivos desnecessários

## 🔧 Debug Local

### Testar build Docker localmente:
```bash
docker build -t test-app .
docker run -p 3000:80 test-app
```

### Verificar logs do container:
```bash
docker logs <container-id>
```

### Entrar no container para debug:
```bash
docker run -it test-app sh
```

## 📊 Monitoramento

### Health Check
Endpoint: `http://seu-dominio/health`
Deve retornar: `healthy`

### Logs importantes
- Build logs no Coolify
- Nginx access/error logs
- Container runtime logs

## 🚀 Performance

### Otimizações aplicadas:
- ✅ Gzip compression
- ✅ Static assets caching
- ✅ Multi-stage Docker build
- ✅ Chunk splitting no Vite

### Métricas esperadas:
- Build time: ~2-5 minutos
- Image size: ~20-50MB (final)
- First load: <2 segundos
