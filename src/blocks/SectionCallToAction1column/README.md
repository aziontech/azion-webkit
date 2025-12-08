# SectionCallToAction1column

A compact single-column call-to-action section block component with background patterns and markdown support. Perfect for conversion-focused sections and promotional content.

## Features

- **Compact Layout Types**: Short variants with orange or black themes
- **Background Patterns**: Dots or square grid patterns with customizable size and opacity
- **Markdown Integration**: Built-in markdown parsing for rich text content
- **Flexible Content**: Support for overline, title, description, and buttons
- **Theme Variants**: Orange and black color schemes
- **Responsive Design**: Adapts to different screen sizes

## Props

| Prop                | Type        | Required | Default                           | Description                      |
| ------------------- | ----------- | -------- | --------------------------------- | -------------------------------- |
| `id`                | `string`    | No       | -                                 | HTML id attribute                |
| `type`              | `string`    | No       | `'short-black'`                   | Layout type variant              |
| `cta`               | `CardProps` | Yes      | -                                 | Main CTA card content            |
| `backgroundPattern` | `object`    | No       | `{ style: 'dots', size: '12px' }` | Background pattern configuration |

### Layout Types

| Type           | Description                      |
| -------------- | -------------------------------- |
| `short-orange` | Compact layout with orange theme |
| `short-black`  | Compact layout with black theme  |

### CardProps Interface

```typescript
interface CardProps {
  overline: string // Small label above title
  title: string // Main title text
  descriptionRawMarkdown: string // Description in markdown format
  linkLabel: string // Button label text
  link: string // Button link URL
  target?: string // Link target attribute (default: '_self')
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

### Orange Theme

```vue
<template>
  <SectionCallToAction1column
    type="short-orange"
    :cta="{
      overline: 'Limited Time Offer',
      title: 'Construa suas aplicacoes de forma inteligente',
      descriptionRawMarkdown:
        'Try our **Enterprise plan** free for 30 days. No credit card required.',
      link: 'https://console.azion.com/signup?promo=30days',
      linkLabel: 'Free Account',
      target: '_blank'
    }"
    :backgroundPattern="{ style: 'dots', size: '12px' }"
  />
</template>

<script setup>
  import SectionCallToAction1column from '@/blocks/SectionCallToAction1column'
</script>
```

### Black Theme

```vue
<template>
  <SectionCallToAction1column
    type="short-black"
    :cta="{
      overline: 'Special Offer',
      title: 'Limited Time Deal',
      descriptionRawMarkdown: 'Get 50% off your first month with our edge computing platform.',
      link: 'https://www.azion.com/promo',
      linkLabel: 'Claim Offer'
    }"
  />
</template>
```

### Custom Background Pattern

```vue
<template>
  <SectionCallToAction1column
    type="short-orange"
    :cta="{
      overline: 'Get Started',
      title: 'Deploy in minutes',
      descriptionRawMarkdown:
        'Experience the power of **edge computing** with our global infrastructure.',
      link: '/signup',
      linkLabel: 'Start Free Trial'
    }"
    :backgroundPattern="{ style: 'square', size: '24px' }"
  />
</template>
```

## Markdown Support

The `cta.descriptionRawMarkdown` prop supports markdown:

- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Links**: `[text](url)`
- **Line breaks**: Double line breaks for paragraphs

## Styling

The component uses:

- **Background Colors**:
  - Orange theme: Orange-500
  - Black theme: Neutral-900
- **Background Patterns**: GridPattern component with dots or square patterns
- **Typography**: Sora font family with responsive sizing
- **Colors**: Context-aware text colors based on theme
  - Orange theme: White text on orange background
  - Black theme: Orange and neutral text on black background
- **Spacing**: Responsive padding (p-6 on mobile, p-12 on desktop)
- **Border Radius**: Rounded corners (rounded-md)

## Responsive Behavior

- **Mobile**: Single column layout, stacked content
- **Desktop (md+)**: Flex row layout with adjusted spacing
- **Typography**: Scales from mobile to desktop sizes
- **Spacing**: Adaptive padding and margins

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard-accessible buttons and links
- Screen reader friendly content structure
- Sufficient color contrast ratios

## Dependencies

- **LayoutContainer**: Wrapper component for consistent layout
- **Overline Component**: For styled overline text
- **Button Component**: For CTA buttons
- **GridPattern Component**: For background patterns
- **Markdown Parser**: Built-in markdown processing
- **Tailwind CSS**: For styling and responsive design
