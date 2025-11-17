# SectionCardCarousel

A responsive carousel section block component for displaying cards with Swiper integration. Features custom navigation controls, responsive breakpoints, and markdown support for card descriptions.

## Features

- **Swiper Integration**: Smooth touch/swipe navigation with custom controls
- **Responsive Breakpoints**: Adapts card display count based on screen size
- **Custom Navigation**: Styled previous/next buttons with hover effects
- **Markdown Support**: Built-in markdown parsing for card descriptions
- **Flexible Cards**: Support for various card types and content
- **Tag System**: Optional tags for card categorization

## Props

| Prop              | Type      | Required | Default | Description                           |
| ----------------- | --------- | -------- | ------- | ------------------------------------- |
| `id`              | `string`  | No       | -       | HTML id attribute                     |
| `title`           | `string`  | No       | -       | Section title                         |
| `cards`           | `Array`   | Yes      | `[]`    | Array of card data objects            |
| `bottomSpacing`   | `string`  | No       | `''`    | Additional bottom spacing classes     |
| `disabledNavigation` | `boolean` | No    | `false` | Disable navigation buttons            |

### Card Interface

```typescript
interface Card {
  title: string
  descriptionRawMarkdown: string // Supports markdown
  imageSrc?: string
  imageAlt?: string
  link?: string
  linkLabel?: string
  tags?: Array<{
    label: string
    severity?: 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  }>
}
```

## Responsive Breakpoints

- **Mobile (default)**: 1.15 cards visible
- **Small (640px+)**: 1.5 cards visible  
- **Medium (768px+)**: 2.5 cards visible
- **Large (1024px+)**: 3 cards visible
- **Extra Large (1280px+)**: 4 cards visible

## Usage

### Basic Example

```vue
<template>
  <SectionCardCarousel
    title="Featured Products"
    :cards="productCards"
  />
</template>

<script setup>
  import SectionCardCarousel from '@/blocks/SectionCardCarousel'
  
  const productCards = [
    {
      title: 'Edge Application',
      descriptionRawMarkdown: 'Build and deploy **applications** at the edge for improved performance.',
      imageSrc: '/images/edge-app.jpg',
      imageAlt: 'Edge Application Dashboard',
      link: '/products/edge-application',
      linkLabel: 'Learn More',
      tags: [
        { label: 'Edge Computing', severity: 'info' },
        { label: 'Performance', severity: 'success' }
      ]
    },
    {
      title: 'Edge Firewall',
      descriptionRawMarkdown: 'Protect your applications with **advanced security** features.',
      imageSrc: '/images/firewall.jpg',
      link: '/products/edge-firewall',
      linkLabel: 'Explore Security'
    }
  ]
</script>
```

### With Markdown Content

```vue
<template>
  <SectionCardCarousel
    title="Solutions by Industry"
    :cards="solutionCards"
    bottomSpacing="mb-20"
  />
</template>

<script setup>
  const solutionCards = [
    {
      title: 'E-commerce',
      descriptionRawMarkdown: `
        Accelerate your **online store** with:
        
        - Faster page loads
        - Global CDN coverage
        - **99.9% uptime** guarantee
        
        [View case studies](/case-studies/ecommerce)
      `,
      imageSrc: '/images/ecommerce.jpg',
      tags: [
        { label: 'Retail', severity: 'secondary' },
        { label: 'Performance', severity: 'success' }
      ]
    }
  ]
</script>
```

### Disabled Navigation

```vue
<template>
  <SectionCardCarousel
    title="Static Card Display"
    :cards="cards"
    :disabledNavigation="true"
  />
</template>
```

## Navigation Controls

The component includes custom navigation buttons:

- **Previous Button**: Left chevron with hover effects
- **Next Button**: Right chevron with hover effects
- **Styling**: Dark background with orange hover states
- **Accessibility**: Proper ARIA labels and disabled states

## Swiper Configuration

- **Grab Cursor**: Enabled for better UX indication
- **Space Between**: 20px gap between slides
- **Loop**: Disabled by default
- **Modules**: Navigation module included

## Card Rendering

Each card supports:

- **Title**: Main card heading
- **Description**: Markdown-parsed content
- **Image**: Optional card image with alt text
- **Link**: Optional CTA link with custom label
- **Tags**: Optional PrimeVue Tag components

## Styling

The component uses:

- **Background**: Transparent with white text
- **Navigation**: Dark buttons with orange hover states
- **Cards**: Inherits styling from card components
- **Spacing**: Responsive padding and gaps
- **Typography**: Sora font for titles

## Responsive Behavior

- **Mobile**: Shows partial next card (1.15 visible)
- **Tablet**: Shows 2-3 cards with smooth transitions
- **Desktop**: Shows 3-4 cards for optimal browsing
- **Navigation**: Always visible unless disabled

## Markdown Support

Card descriptions support:

- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Links**: `[text](url)`
- **Lists**: Unordered and ordered lists
- **Line breaks**: Double line breaks for paragraphs

## Accessibility

- **Semantic Structure**: Uses `<section>` element
- **Navigation Labels**: Proper ARIA labels for buttons
- **Keyboard Support**: Swiper keyboard navigation
- **Screen Readers**: Accessible card content structure
- **Focus Management**: Proper focus indicators

## Dependencies

- **Swiper**: Vue 3 integration for carousel functionality
- **PrimeVue**: For Tag components and icons
- **Markdown Parser**: Built-in markdown processing
- **Tailwind CSS**: For styling and responsive design
