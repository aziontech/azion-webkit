# SectionMigratedClients

A rebranding section component that displays two `MigratedClientsCard` components side by side, each occupying 50% of the available width.

## Usage

```vue
<template>
  <SectionMigratedClients
    :first-card="firstCardData"
    :second-card="secondCardData"
  >
    <template #first-card-content>
      <img src="logo1.png" alt="Client 1" />
      <img src="logo2.png" alt="Client 2" />
    </template>
    
    <template #second-card-content>
      <img src="logo3.png" alt="Client 3" />
      <img src="logo4.png" alt="Client 4" />
    </template>
  </SectionMigratedClients>
</template>

<script setup>
import SectionMigratedClients from '@/blocks/SectionMigratedClients'

const firstCardData = {
  text: 'Before Migration',
  logos: [],
  link: '/before'
}

const secondCardData = {
  text: 'After Migration',
  logos: [],
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

## Slots

### `first-card-content`
Custom content to be displayed inside the first MigratedClientsCard component.

### `second-card-content`
Custom content to be displayed inside the second MigratedClientsCard component.

## Features

- **Responsive Layout:** Uses CSS Grid to display cards side by side on desktop (md breakpoint and above) and stacked on mobile
- **50/50 Split:** Each card occupies exactly 50% of the container width on desktop
- **Flexible Content:** Supports custom content via slots for each card
- **Full MigratedClientsCard Features:** Inherits all features from the MigratedClientsCard component including hover effects and styling

## Styling

The component uses Tailwind CSS classes for responsive grid layout:
- Mobile: Single column (stacked cards)
- Desktop (md+): Two equal columns (50% each)
- Gap between cards: 1rem (gap-4)
