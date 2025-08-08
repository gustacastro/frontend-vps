# Sistema de Cores

Este projeto utiliza um sistema de variáveis CSS customizadas para padronizar as cores em toda a aplicação.

## Variáveis de Cores Disponíveis

### Cores Primárias
- `--color-primary`: #2563eb (azul principal)
- `--color-primary-hover`: #1d4ed8 (azul hover)
- `--color-primary-light`: #60a5fa (azul claro)

### Cores Secundárias
- `--color-secondary`: #6b7280 (cinza)
- `--color-secondary-hover`: #4b5563 (cinza hover)
- `--color-secondary-light`: #9ca3af (cinza claro)

### Cores de Destaque
- `--color-accent`: #3b82f6 (azul accent)
- `--color-accent-hover`: #2563eb (azul accent hover)
- `--color-accent-light`: #93c5fd (azul accent claro)

### Cores de Perigo/Erro
- `--color-danger`: #dc2626 (vermelho)
- `--color-danger-hover`: #b91c1c (vermelho hover)
- `--color-danger-light`: #f87171 (vermelho claro)
- `--color-danger-bg`: #7f1d1d (fundo de erro)
- `--color-danger-border`: #b91c1c (borda de erro)
- `--color-danger-text`: #fca5a5 (texto de erro)

### Cores de Fundo
- `--color-background`: #111827 (fundo principal)
- `--color-background-card`: #1f2937 (fundo de cards)
- `--color-background-input`: #374151 (fundo de inputs)
- `--color-background-hover`: #374151 (fundo hover)

### Cores de Texto
- `--color-text-primary`: #f9fafb (texto principal)
- `--color-text-secondary`: #d1d5db (texto secundário)
- `--color-text-muted`: #9ca3af (texto desbotado)
- `--color-text-placeholder`: #6b7280 (placeholder)

### Cores de Borda
- `--color-border`: #374151 (borda padrão)
- `--color-border-light`: #4b5563 (borda clara)

### Cores de Foco
- `--color-focus`: #3b82f6 (cor de foco)

## Classes Tailwind Customizadas

As variáveis são mapeadas para classes Tailwind customizadas:

### Primárias
- `bg-primary`, `text-primary`, `border-primary`
- `bg-primary-hover`, `text-primary-hover`
- `bg-primary-light`, `text-primary-light`

### Secundárias
- `bg-secondary`, `text-secondary`, `border-secondary`
- `bg-secondary-hover`, `text-secondary-hover`
- `bg-secondary-light`, `text-secondary-light`

### Perigo
- `bg-danger`, `text-danger`, `border-danger`
- `bg-danger-hover`, `text-danger-hover`
- `bg-danger-bg`, `text-danger-text`, `border-danger-border`

### Fundos
- `bg-app-bg`, `bg-app-bg-card`, `bg-app-bg-input`, `bg-app-bg-hover`

### Textos
- `text-app-text-primary`, `text-app-text-secondary`, `text-app-text-muted`, `text-app-text-placeholder`

### Bordas
- `border-app-border`, `border-app-border-light`

### Foco
- `ring-app-focus`, `border-app-focus`

## Como Usar

### Em componentes TSX:
```tsx
<div className="bg-app-bg-card border border-app-border text-app-text-primary">
  <h1 className="text-app-text-primary">Título</h1>
  <p className="text-app-text-muted">Descrição</p>
  <button className="bg-primary hover:bg-primary-hover text-app-text-primary">
    Botão
  </button>
</div>
```

### Personalização

Para alterar as cores do projeto, edite as variáveis no arquivo `src/index.css`:

```css
:root {
  --color-primary: #seu-azul;
  --color-background: #seu-fundo;
  /* ... outras variáveis */
}
```

Todas as mudanças serão aplicadas automaticamente em todo o projeto.
