# GridCardContainerWithToggle

Componente que combina múltiplos grids de cards com um toggle para alternar entre diferentes conjuntos de seções.

## Uso

```vue
<template>
  <GridCardContainerWithToggle
    :mainSections="monthlySections"
    :alternativeSections="yearlySections"
    mainTitle="NOSSOS PLANOS"
    mainLabel="Mensal"
    alternativeLabel="Anual"
    toggleDescription="Economize 20% com planos anuais"
    defaultView="main"
    @toggle-change="handleToggleChange"
  />
</template>

<script setup>
  import GridCardContainerWithToggle from '@/blocks/GridCardContainerWithToggle'

  const monthlySections = [
    {
      title: 'PLANOS BÁSICOS',
      id: 'basic-monthly',
      cards: [
        {
          title: 'Starter',
          description: 'Perfeito para começar',
          icon: 'pi-bolt',
          href: '/pricing/starter',
          label: 'R$ 29/mês'
        },
        {
          title: 'Pro',
          description: 'Para crescer seu negócio',
          icon: 'pi-star',
          href: '/pricing/pro',
          label: 'R$ 99/mês'
        }
      ]
    },
    {
      title: 'PLANOS AVANÇADOS',
      id: 'advanced-monthly',
      cards: [
        {
          title: 'Enterprise',
          description: 'Para grandes empresas',
          icon: 'pi-building',
          href: '/pricing/enterprise',
          label: 'R$ 299/mês'
        }
      ]
    }
  ]

  const yearlySections = [
    {
      title: 'PLANOS ANUAIS',
      id: 'yearly-plans',
      cards: [
        {
          title: 'Starter Anual',
          description: 'Economize 20%',
          icon: 'pi-bolt',
          href: '/pricing/starter-yearly',
          label: 'R$ 279/ano'
        }
      ]
    }
  ]

  const handleToggleChange = (option) => {
    console.log('Toggle alterado para:', option)
  }
</script>
```

## Props

| Prop                  | Tipo                      | Padrão       | Descrição                                       |
| --------------------- | ------------------------- | ------------ | ----------------------------------------------- |
| `mainSections`        | `GridSection[]`           | `[]`         | Array de seções para a primeira opção do toggle |
| `alternativeSections` | `GridSection[]`           | `[]`         | Array de seções para a segunda opção do toggle  |
| `mainTitle`           | `string`                  | `''`         | Título principal acima do toggle                |
| `mainLabel`           | `string`                  | `'Option 1'` | Label da primeira opção do toggle               |
| `alternativeLabel`    | `string`                  | `'Option 2'` | Label da segunda opção do toggle                |
| `toggleDescription`   | `string`                  | `''`         | Texto descritivo abaixo do toggle               |
| `defaultView`         | `'main' \| 'alternative'` | `'main'`     | View inicial ao carregar o componente           |

## Interface GridSection

```typescript
interface GridSection {
  title: string // Título da seção
  id: string // ID único da seção
  cards: CardProps[] // Array de cards da seção
}
```

## Eventos

| Evento          | Payload  | Descrição                                                                  |
| --------------- | -------- | -------------------------------------------------------------------------- |
| `toggle-change` | `string` | Emitido quando o usuário alterna entre as opções ('main' ou 'alternative') |

## Features

- ✅ Alternância suave entre diferentes grids de cards
- ✅ Animação fade durante a transição
- ✅ Totalmente responsivo
- ✅ TypeScript support
- ✅ Customizável via props
