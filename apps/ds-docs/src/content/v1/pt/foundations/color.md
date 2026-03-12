---
title: Cor
description: O sistema de cores fornece tokens semânticos para interfaces consistentes e acessíveis.
navLabel: Cor
order: 2
type: foundation
category: color
---

## Filosofia de Cores

Nosso sistema de cores foi projetado para ser:

- **Acessível**: Todas as combinações de cores atendem aos requisitos de contraste WCAG 2.1 AA
- **Semântico**: As cores são nomeadas por propósito, não por aparência
- **Consistente**: Os mesmos tokens são usados em todos os componentes
- **Tematizável**: As cores se adaptam automaticamente aos modos claro e escuro

## Cores Primárias

A paleta de cores primárias representa a marca Azion:

| Token | Modo Claro | Modo Escuro | Uso |
|-------|------------|-------------|-----|
| `--color-primary-50` | `#eff6ff` | `#1e3a8a` | Fundos claros |
| `--color-primary-100` | `#dbeafe` | `#1e40af` | Estados de hover |
| `--color-primary-500` | `#3b82f6` | `#3b82f6` | Ações primárias |
| `--color-primary-700` | `#1d4ed8` | `#60a5fa` | Estados ativos |
| `--color-primary-900` | `#1e3a8a` | `#93c5fd` | Texto em fundo claro |

## Cores Semânticas

Cores semânticas transmitem significado:

### Sucesso
Usado para ações positivas e confirmações.

### Alerta
Usado para mensagens de cautela e avisos.

### Erro
Usado para estados de erro e ações destrutivas.

### Informação
Usado para mensagens informativas e estados neutros.

## Diretrizes de Uso

### Faça
- Use tokens semânticos em vez de valores de cor brutos
- Garanta contraste suficiente para texto
- Use cores de forma consistente em elementos semelhantes

### Não Faça
- Não use cor sozinha para transmitir informações
- Não crie novas cores fora do sistema
- Não use cores decorativas que distraiam do conteúdo

## Relacionados

- [Tipografia](/foundations/typography) - Sistema de tipografia
- [Tokens](/tokens) - Referência de design tokens
