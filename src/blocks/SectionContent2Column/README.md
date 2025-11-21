# SectionContent2Column

A two-column content section component with alternating text and image cards, featuring background patterns and decorative corner elements. Perfect for showcasing features, services, or content in a structured grid layout.

## Features

- **Two-Column Grid**: Alternating text and image cards
- **Background Patterns**: Dots or square grid patterns on image cards
- **Decorative Elements**: Corner dots for visual interest
- **Responsive Design**: Adapts from mobile to desktop layouts
- **Flexible Content**: Support for overline and HTML descriptions

## Props

| Prop                | Type            | Required | Default                           | Description                          |
| ------------------- | --------------- | -------- | --------------------------------- | ------------------------------------ |
| `cards`             | `ContentCard[]` | Yes      | -                                 | Array of content cards (typically 2) |
| `id`                | `string`        | No       | -                                 | HTML id attribute                    |
| `bottomSpacing`     | `string`        | No       | `mb-24`                           | Bottom margin spacing class          |
| `backgroundPattern` | `object`        | No       | `{ style: 'dots', size: '48px' }` | Background pattern configuration     |

### ContentCard Interface

```typescript
interface ContentCard {
  overline?: string // Optional label above description
  description: string // Description text (supports HTML)
  image: {
    src: string // Image URL
    alt: string // Image alt text
  }
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

### Basic Two-Column Content

```vue
<template>
  <SectionContent2Column
    :cards="[
      {
        overline: 'Performance',
        description: 'Deploy applications closer to users with our global edge network.',
        image: {
          src: '/images/performance.png',
          alt: 'Performance illustration'
        }
      },
      {
        overline: 'Security',
        description: 'Built-in security features including DDoS protection and WAF.',
        image: {
          src: '/images/security.png',
          alt: 'Security illustration'
        }
      }
    ]"
  />
</template>

<script setup>
  import SectionContent2Column from '@/blocks/SectionContent2Column'
</script>
```

### Custom Background Pattern

```vue
<template>
  <SectionContent2Column
    :cards="cards"
    :backgroundPattern="{ style: 'square', size: '24px' }"
  />
</template>
```

## Layout Structure

The component creates a two-column grid where:

- **Left Column**: Text content cards with overline and description
- **Right Column**: Image cards with background patterns
- **Mobile**: Stacks vertically with custom ordering

## Styling

The component uses:

- **Borders**: Neutral-900 borders with decorative corner elements
- **Background Patterns**: GridPattern component on image cards
- **Typography**:
  - Overline: Orange accent color
  - Description: Neutral-400, Sora font
- **Spacing**: Responsive padding (p-6 on mobile, p-12 on desktop)

## Responsive Behavior

- **Mobile**: Single column, stacked layout with custom ordering
- **Desktop (md+)**: Two-column grid layout
- **Spacing**: Adaptive padding and margins

## Accessibility

- Semantic HTML structure
- Proper alt text for images
- Screen reader friendly content structure
- Sufficient color contrast ratios

## Dependencies

- **LayoutContainer**: Wrapper component for consistent layout
- **Overline Component**: For styled overline text
- **GridPattern Component**: For background patterns
- **Tailwind CSS**: For styling and responsive design
