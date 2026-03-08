---
title: Cor
description: Sistema de cores do Azion Design System com tokens semânticos e diretrizes de uso.
navLabel: Cor
order: 1
type: foundation
category: color
language: pt
translatedFrom: en
translationStatus: complete
---

# Cor

O sistema de cores do Azion Design System é construído sobre tokens semânticos que se adaptam a diferentes contextos e temas.

## Princípios

### Acessibilidade
Todas as combinações de cores atendem aos requisitos de contraste WCAG 2.1 AA.

### Consistência
Tokens semânticos garantem uso consistente em toda a interface.

### Flexibilidade
O sistema suporta múltiplos temas, incluindo modo claro e escuro.

## Tokens de Cor

### Cores Primárias

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | #2563eb | Ações principais, links |
| `--color-primary-dark` | #1d4ed8 | Estados hover |
| `--color-primary-light` | #3b82f6 | Estados ativos |

### Cores Semânticas

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-success` | #16a34a | Sucesso, confirmação |
| `--color-warning` | #ca8a04 | Avisos, atenção |
| `--color-error` | #dc2626 | Erros, ações destrutivas |
| `--color-info` | #2563eb | Informação |

### Cores Neutras

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-text` | #1f2937 | Texto principal |
| `--color-text-secondary` | #6b7280 | Texto secundário |
| `--color-surface` | #ffffff | Fundo de superfície |
| `--color-surface-hover` | #f9fafb | Estados hover |

## Uso

### Em CSS

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-surface);
}

.button:hover {
  background-color: var(--color-primary-dark);
}
```

### Em Componentes Vue

```vue
<template>
  <button class="custom-button">
    <slot />
  </button>
</template>

<style scoped>
.custom-button {
  background: var(--color-primary);
  color: var(--color-surface);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}

.custom-button:hover {
  background: var(--color-primary-dark);
}
</style>
```

## Modo Escuro

O sistema de cores suporta automaticamente o modo escuro através de variáveis CSS:

```css
:root {
  --color-surface: #ffffff;
  --color-text: #1f2937;
}

[data-theme='dark'] {
  --color-surface: #1f2937;
  --color-text: #f9fafb;
}
```

## Diretrizes

### Faça

- Use tokens semânticos em vez de valores hexadecimais diretos
- Garanta contraste suficiente entre texto e fundo
- Considere usuários com deficiência de visão de cores

### Não Faça

- Não use cores sozinhas para transmitir informações
- Não crie novos tokens sem necessidade
- Não ignore o modo escuro

## Próximos Passos

- [Tipografia](/pt/foundations/typography) - Conheça o sistema de tipografia
- [Espaçamento](/pt/foundations/spacing) - Entenda a escala de espaçamento
