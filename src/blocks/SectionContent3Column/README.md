# SectionContent3Column

A three-column content section component with background patterns and decorative corner elements. Perfect for feature showcases, service descriptions, and organized content presentation.

## Features

- **Three-Column Layout**: Responsive design that adapts to screen size
- **Background Patterns**: Dots or square grid patterns on each card
- **Decorative Elements**: Corner dots for visual interest
- **Responsive Design**: Adapts from single to three-column layout
- **Consistent Spacing**: Standardized padding and gaps between columns

## Props

| Prop                | Type            | Required | Default                           | Description                          |
| ------------------- | --------------- | -------- | --------------------------------- | ------------------------------------ |
| `cards`             | `ContentCard[]` | Yes      | -                                 | Array of content cards (typically 3) |
| `id`                | `string`        | No       | -                                 | HTML id attribute                    |
| `bottomSpacing`     | `string`        | No       | `mb-24`                           | Bottom margin spacing class          |
| `backgroundPattern` | `object`        | No       | `{ style: 'dots', size: '48px' }` | Background pattern configuration     |

### ContentCard Interface

```typescript
interface ContentCard {
  title: string // Card title text
  description: string // Card description (supports HTML)
}
```

### Background Pattern

```typescript
interface BackgroundPattern {
  style: 'dots' | 'square' // Pattern type
  size: '12px' | '24px' | '48px' // Grid size
}
```

## Usage

### Basic Three-Column Content

```vue
<template>
  <SectionContent3Column
    :cards="[
      {
        title: 'Performance',
        description:
          'Deploy applications closer to users with our global edge network for improved performance.'
      },
      {
        title: 'Security',
        description:
          'Built-in security features including DDoS protection, WAF, and SSL certificates.'
      },
      {
        title: 'Scalability',
        description: 'Automatic scaling based on demand with no configuration required.'
      }
    ]"
  />
</template>

<script setup>
  import SectionContent3Column from '@/blocks/SectionContent3Column'
</script>
```

### Custom Background Pattern

```vue
<template>
  <SectionContent3Column
    :cards="cards"
    :backgroundPattern="{ style: 'square', size: '24px' }"
  />
</template>
```

## Layout Structure

The component uses a three-column grid layout:

- **Each Column**: Contains a card with title, description, and background pattern
- **Mobile**: Single column, stacked layout
- **Desktop (md+)**: Three equal columns

## Styling

The component uses:

- **Background Patterns**: GridPattern component on each card
- **Borders**: Neutral-900 borders with decorative corner elements
- **Typography**:
  - Title: Neutral-200, Sora font, text-2xl
  - Description: Neutral-400, Sora font, text-sm
- **Spacing**: Responsive padding (p-6 on mobile, p-12 on desktop)

## Responsive Behavior

- **Mobile**: Single column, stacked layout
- **Desktop (md+)**: Three equal columns
- **Spacing**: Adaptive padding and margins

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Screen reader friendly content structure
- Sufficient color contrast ratios

## Dependencies

- **LayoutContainer**: Wrapper component for consistent layout
- **GridPattern Component**: For background patterns
- **Tailwind CSS**: For styling and responsive design
