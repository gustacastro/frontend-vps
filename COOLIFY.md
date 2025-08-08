# Coolify Configuration

Este projeto está configurado para deploy no Coolify usando Docker Compose.

## Configuração no Coolify

### 1. Conectar o Repositório Git
- Adicione seu repositório Git no Coolify
- Configure o branch de deploy (geralmente `main` ou `master`)

### 2. Variáveis de Ambiente
Configure as seguintes variáveis de ambiente no Coolify:

**IMPORTANTE**: As variáveis que começam com `VITE_` são utilizadas em build-time, não em runtime. Certifique-se de configurá-las corretamente.

```bash
# Variáveis de ambiente para produção
NODE_ENV=production

# Variáveis do Vite (usadas em build-time)
VITE_API_BASE_URL=https://sua-api.exemplo.com
VITE_APP_NAME="Seu Dashboard"
VITE_APP_VERSION="1.0.0"
```

**No Coolify, configure essas variáveis em:**
- Environment Variables → Production Environment Variables
- Certifique-se de que as variáveis `VITE_*` estão disponíveis durante o build

### 3. Configurações do Projeto
- **Tipo**: Docker Compose
- **Arquivo**: `docker-compose.yml`
- **Porta**: 80 (será mapeada automaticamente pelo Coolify)
- **Health Check**: `/health`

### 4. Deploy Automático
O Coolify irá automaticamente:
- Fazer build da imagem Docker
- Executar o container com Nginx
- Configurar SSL/HTTPS
- Monitorar a aplicação

## Comandos Úteis

### Build local para teste:
```bash
docker build -t frontend-app .
docker run -p 3000:80 frontend-app
```

### Teste do docker-compose:
```bash
docker-compose up --build
```

## Estrutura de Deploy

```
Coolify → Git Repository → Docker Build → Nginx Container → Aplicação React
```

## Troubleshooting

### Problemas com Variáveis de Ambiente
1. **Variáveis VITE_ não estão funcionando**: 
   - Verifique se as variáveis estão configuradas no Coolify
   - As variáveis VITE_ são processadas em build-time, não em runtime
   - Certifique-se de que estão listadas em "Environment Variables"

2. **API calls falhando**: 
   - Verifique se `VITE_API_BASE_URL` está correta
   - Teste localmente com: `docker-compose up --build`

### Outros Problemas
1. **Build falhando**: Verifique se todas as dependências estão no `package.json`
2. **Roteamento não funciona**: O nginx.conf já está configurado para SPAs
3. **Variáveis de ambiente**: Certifique-se de que começam com `VITE_` para serem incluídas no build

### Como testar as variáveis localmente:
```bash
# Definir as variáveis e buildar
export VITE_API_BASE_URL=https://api.exemplo.com
docker-compose up --build
```
