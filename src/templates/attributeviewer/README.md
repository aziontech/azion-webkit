# AttributeViewer

Componente para exibir estruturas de atributos aninhados de forma hierárquica e colapsável.

## Funcionalidades

- Exibe atributos de primeiro nível fora de painéis
- Renderiza atributos filhos em painéis colapsáveis do PrimeVue
- Suporte a aninhamento infinito de atributos
- Tags para tipos de dados
- Interface limpa e funcional

## Props

### `attributes`
- **Tipo**: `Array<AttributeItem>`
- **Obrigatório**: `true`
- **Descrição**: Array de objetos de atributos com estrutura aninhada

#### Estrutura do AttributeItem:
```typescript
interface AttributeItem {
  name: string        // Nome do atributo
  type: string        // Tipo do atributo (String, Object, Array, etc.)
  description: string // Descrição do atributo
  children?: AttributeItem[] // Atributos filhos (opcional)
}
```

## Exemplo de Uso

```vue
<template>
  <AttributeViewer :attributes="myAttributes" />
</template>

<script setup>
import AttributeViewer from '@/templates/attributeviewer'

const myAttributes = [
  {
    name: 'config',
    type: 'Object',
    description: 'Configuration object for the application.',
    children: [
      {
        name: 'database',
        type: 'Object',
        description: 'Database connection settings.',
        children: [
          {
            name: 'host',
            type: 'String',
            description: 'Database host address.',
            children: []
          },
          {
            name: 'port',
            type: 'Number',
            description: 'Database port number.',
            children: []
          }
        ]
      }
    ]
  }
]
</script>
```

## Estrutura Visual

- **Primeiro nível**: Exibido diretamente sem painel
  - Nome como título (h3)
  - Tipo como tag colorida
  - Descrição como texto secundário
  
- **Níveis aninhados**: Exibidos em painéis colapsáveis
  - Nome no cabeçalho do painel
  - Tipo como tag no cabeçalho
  - Descrição no conteúdo do painel
  - Filhos renderizados recursivamente

## Dependências

- PrimeVue Panel
- PrimeVue Tag
- Vue 3 Composition API
