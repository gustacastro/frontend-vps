# Coolify Configuration

Este projeto está configurado para deploy no Coolify usando Docker Compose.

## Configuração no Coolify

### 1. Conectar o Repositório Git
- Adicione seu repositório Git no Coolify
- Configure o branch de deploy (geralmente `main` ou `master`)

### 2. Variáveis de Ambiente
Configure as seguintes variáveis de ambiente no Coolify:

```bash
NODE_ENV=production
VITE_API_BASE_URL=https://sua-api.exemplo.com
VITE_APP_NAME="Seu Dashboard"
```

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

1. **Build falhando**: Verifique se todas as dependências estão no `package.json`
2. **Roteamento não funciona**: O nginx.conf já está configurado para SPAs
3. **Variáveis de ambiente**: Certifique-se de que começam com `VITE_` para serem incluídas no build
