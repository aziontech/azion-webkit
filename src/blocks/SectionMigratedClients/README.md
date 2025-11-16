# SectionMigratedClients

A rebranding section component that displays two `MigratedClientsCard` components side by side, each occupying 50% of the available width.

## Usage

```vue
<template>
  <SectionMigratedClients
    :first-card="firstCardData"
    :second-card="secondCardData"
  />
</template>

<script setup>
  import SectionMigratedClients from '@/blocks/SectionMigratedClients'

  const firstCardData = {
    text: 'Before Migration',
    logos: [
      { imageSrc: '<svg>...</svg>', alt: 'Logo 1', title: 'Company 1' },
      { imageSrc: '<svg>...</svg>', alt: 'Logo 2', title: 'Company 2' }
    ],
    link: '/before'
  }

  const secondCardData = {
    text: 'After Migration',
    logos: [
      { imageSrc: '<svg>...</svg>', alt: 'Logo 3', title: 'Company 3' },
      { imageSrc: '<svg>...</svg>', alt: 'Logo 4', title: 'Company 4' }
    ],
    link: '/after'
  }
</script>
```

## Props

### `firstCard`

- **Type:** `Object`
- **Required:** `true`
- **Description:** Configuration object for the first MigratedClientsCard component
- **Properties:**
  - `text` (String): Label text displayed on the card
  - `logos` (Array): Array of logo data
  - `link` (String, optional): URL for the card link

### `secondCard`

- **Type:** `Object`
- **Required:** `true`
- **Description:** Configuration object for the second MigratedClientsCard component
- **Properties:**
  - `text` (String): Label text displayed on the card
  - `logos` (Array): Array of logo data
  - `link` (String, optional): URL for the card link

## Features

- **Responsive Layout:** Uses Flexbox to display cards side by side on desktop (md breakpoint and above) and stacked on mobile
- **50/50 Split:** Each card occupies exactly 50% of the container width on desktop
- **Logo Rendering:** Automatically renders logos from the `logos` array using `v-html` for SVG support
- **Full MigratedClientsCard Features:** Inherits all features from the MigratedClientsCard component including hover effects and styling

## Styling

The component uses Tailwind CSS classes for responsive grid layout:

- Mobile: Single column (stacked cards)
- Desktop (md+): Two equal columns (50% each)
- Gap between cards: 1rem (gap-4)
