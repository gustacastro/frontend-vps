# Dashboard Frontend

Uma aplicação React moderna construída com TypeScript, Vite e Tailwind CSS.

## 🚀 Deploy no Coolify

Este projeto está otimizado para deploy no Coolify usando Docker Compose.

### Pré-requisitos
- Repositório Git configurado
- Coolify instalado na VPS

### Configuração no Coolify

1. **Adicionar Projeto**
   - Conecte seu repositório Git
   - Selecione o tipo "Docker Compose"
   - Configure o arquivo `docker-compose.yml`

2. **Variáveis de Ambiente**
   ```bash
   NODE_ENV=production
   VITE_API_BASE_URL=https://sua-api.exemplo.com
   VITE_APP_NAME="Dashboard App"
   ```

3. **Configurações**
   - **Porto**: 80 (mapeado automaticamente)
   - **Health Check**: `/health`
   - **Branch**: `main` ou `master`

### 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Docker local
npm run docker:build
npm run docker:run
npm run docker:compose
```

## 🛠️ Tecnologias

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **React Router** - Roteamento
- **React Hook Form** - Formulários
- **Docker** - Containerização
- **Nginx** - Servidor web

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── contexts/       # Contextos React
├── hooks/          # Custom hooks
├── pages/          # Páginas da aplicação
├── routes/         # Configuração de rotas
├── schemas/        # Validação de dados
├── services/       # APIs e serviços
└── types/          # Tipos TypeScript
```

## 🔧 Configuração Local

1. **Instalar dependências**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```

3. **Executar em desenvolvimento**
   ```bash
   npm run dev
   ```

## 🐳 Docker

### Build e execução
```bash
docker build -t dashboard-frontend .
docker run -p 3000:80 dashboard-frontend
```

### Docker Compose
```bash
docker-compose up --build
```

## 📚 Documentação Adicional

- [Configuração do Coolify](COOLIFY.md)
- [Guia de Deploy](docs/deploy.md)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request
