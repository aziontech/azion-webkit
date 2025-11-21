# SectionCards3Column

A three-column card section block component with responsive layout and flexible card support. Designed specifically for displaying cards in an organized grid structure.

## Features

- **Three-Column Grid**: Responsive card layout that adapts to screen size
- **Card-Optimized**: Specifically designed for card-based content
- **Responsive Breakpoints**: Adapts from single to three-column layout
- **Flexible Content**: Supports any card component type
- **Consistent Spacing**: Standardized gaps and padding for cards

## Props

This component doesn't accept any props - it provides a pure layout container optimized for cards.

## Slots

| Slot      | Description                           |
| --------- | ------------------------------------- |
| `default` | Main content area for card components |

## Grid Breakpoints

- **Mobile**: 1 column (stacked cards)
- **Medium (md+)**: 2 columns
- **Large (lg+)**: 3 columns

## Usage

### Basic Example

```vue
<template>
  <SectionCards3Column>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :description="product.description"
      :image="product.image"
      :link="product.link"
    />
  </SectionCards3Column>
</template>

<script setup>
  import SectionCards3Column from '@/blocks/SectionCards3Column'
  import ProductCard from '@/components/ProductCard'
</script>
```

### Feature Cards

```vue
<template>
  <SectionCards3Column>
    <FeatureCard
      icon="pi pi-bolt"
      title="Lightning Fast"
      description="Deploy applications in under 60 seconds"
    />
    <FeatureCard
      icon="pi pi-shield"
      title="Secure by Default"
      description="Built-in security features and compliance"
    />
    <FeatureCard
      icon="pi pi-globe"
      title="Global Network"
      description="100+ edge locations worldwide"
    />
  </SectionCards3Column>
</template>
```

## Dependencies

- **Tailwind CSS**: For grid layout and responsive design
- **Vue 3**: Slot system for content insertion
