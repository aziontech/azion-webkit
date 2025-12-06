# SectionCards2Column

A responsive section component that displays cards in a 2-column grid layout using the Card component with bordered variant.

## Features

- **2-Column Grid Layout**: Displays cards in 2 columns on large screens, 1 column on mobile
- **Card Component Integration**: Uses the Card.vue component with bordered variant
- **Icon Support**: Optional PrimeVue icons for each card
- **Markdown Support**: Card descriptions support markdown formatting
- **Responsive Design**: Automatically adjusts to mobile/tablet/desktop screens
- **Customizable Spacing**: Configurable bottom spacing options
- **Border with Dots**: Cards feature corner dots and hover effects

## Props

### `cards`

- **Type**: `Card2Column[]`
- **Required**: No
- **Default**: `[]`
- **Description**: Array of card objects to display

#### Card2Column Interface

```typescript
interface Card2Column {
  icon?: string // Optional PrimeVue icon class (e.g., 'pi pi-bolt')
  title: string // Card title
  descriptionRawMarkdown: string // Card description with markdown support
}
```

### `id`

- **Type**: `string`
- **Required**: No
- **Default**: `''`
- **Description**: HTML id attribute for the section

### `bottomSpacing`

- **Type**: `'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'`
- **Required**: No
- **Default**: `'mb-24'`
- **Description**: Bottom margin spacing for the section

## Usage

### Basic Example

```vue
<template>
  <SectionCards2Column :cards="cards" />
</template>

<script setup>
  import SectionCards2Column from '@/blocks/SectionCards2Column'

  const cards = [
    {
      icon: 'pi pi-bolt',
      title: 'Ultra-Low Latency',
      descriptionRawMarkdown:
        'Deploy your applications at the **edge** for millisecond response times.'
    },
    {
      icon: 'pi pi-shield',
      title: 'Advanced Security',
      descriptionRawMarkdown:
        'Protect your infrastructure with [DDoS mitigation](https://azion.com) and WAF.'
    }
  ]
</script>
```

### With Custom Spacing

```vue
<SectionCards2Column :cards="cards" bottomSpacing="mb-48" id="features-section" />
```

### Cards without Icons

```vue
<script setup>
  const cards = [
    {
      title: '99.99% Uptime',
      descriptionRawMarkdown: 'Industry-leading **SLA** for your applications.'
    },
    {
      title: '24/7 Support',
      descriptionRawMarkdown: 'Expert support team available around the clock.'
    }
  ]
</script>
```

## Markdown Support

Card descriptions support the following markdown features:

- **Bold text**: `**text**`
- _Italic text_: `*text*`
- [Links](url): `[text](url)`
- Line breaks and paragraphs

## Layout

- **Desktop (lg+)**: 2 columns grid
- **Mobile/Tablet**: 1 column stack
- **Gap**: 1.5rem (gap-6) between cards

## Card Styling

Each card features:

- Border with corner dots (neutral-400)
- Hover effect (background changes to neutral-900)
- Smooth transitions (150ms)
- Orange icons (text-orange-500)
- White titles (display-5)
- Gray descriptions (body-2, text-neutral-400)

## Dependencies

- `LayoutContainer` - Provides consistent page layout
- `Card` - Card component with bordered variant
- `markdown-service` - Handles markdown parsing (used by Card component)

## Related Components

- `SectionCards3Column` - 3-column card layout
- `Card` - Base card component
- `GridCardContainer` - Alternative card grid layout
