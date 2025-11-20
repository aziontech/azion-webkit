# SectionCallToAction

A versatile call-to-action section block component with multiple layout types, background patterns, and markdown support. Perfect for conversion-focused sections and promotional content.

## Features

- **Multiple Layout Types**: Various CTA layouts including 2-column and short variants
- **Background Patterns**: Dots or square grid patterns with customizable size and opacity
- **Markdown Integration**: Built-in markdown parsing for rich text content
- **Flexible Content**: Support for overline, title, description, and buttons
- **Theme Variants**: Orange and neutral color schemes
- **Responsive Design**: Adapts to different screen sizes

## Props

| Prop                | Type        | Required | Default                           | Description                       |
| ------------------- | ----------- | -------- | --------------------------------- | --------------------------------- |
| `id`                | `string`    | No       | -                                 | HTML id attribute                 |
| `type`              | `string`    | No       | `'2-col-70-30'`                   | Layout type variant               |
| `content`           | `CardProps` | No       | -                                 | Content card for 2-column layouts |
| `cta`               | `CardProps` | Yes      | -                                 | Main CTA card content             |
| `backgroundPattern` | `object`    | No       | `{ style: 'dots', size: '12px' }` | Background pattern configuration  |

### Layout Types

| Type                 | Description                              |
| -------------------- | ---------------------------------------- |
| `2-col-70-30`        | Two-column layout (70% CTA, 30% content) |
| `1-col`              | Single-column layout                     |
| `1-col-short-orange` | Compact layout with orange theme         |
| `1-col-short-black`  | Compact layout with black theme          |

### CardProps Interface

```typescript
interface CardProps {
  overline: string // Small label above title
  title: string // Main title text
  descriptionRawMarkdown: string // Description in markdown format
  linkLabel: string // Button label text
  link: string // Button link URL
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

### Basic CTA

```vue
<template>
  <SectionCallToAction
    :cta="{
      overline: 'Get Started Today',
      title: 'Ready to accelerate your applications?',
      descriptionRawMarkdown:
        'Join thousands of developers building **faster applications** with our edge platform.',
      link: '/signup',
      linkLabel: 'Start Free Trial'
    }"
  />
</template>

<script setup>
  import SectionCallToAction from '@/blocks/SectionCallToAction'
</script>
```

### Two-Column Layout

```vue
<template>
  <SectionCallToAction
    type="2-col-70-30"
    :content="{
      overline: 'Edge Computing',
      title: 'Build at the Edge',
      descriptionRawMarkdown: 'Deploy applications **closer to users** for improved performance.',
      link: '/docs',
      linkLabel: 'Learn More'
    }"
    :cta="{
      overline: 'Get Started',
      title: 'Start Building Today',
      descriptionRawMarkdown: 'Get started with our **free tier** and scale as you grow.',
      link: '/signup',
      linkLabel: 'Create Account'
    }"
  />
</template>
```

### Compact Orange Theme

```vue
<template>
  <SectionCallToAction
    type="1-col-short-orange"
    :cta="{
      overline: 'Limited Time',
      title: '50% Off First Year',
      descriptionRawMarkdown: 'Special pricing for **new customers**. No setup fees.',
      link: '/pricing',
      linkLabel: 'View Pricing'
    }"
    :backgroundPattern="{ style: 'dots', size: '12px' }"
  />
</template>
```

### Custom Background Pattern

```vue
<template>
  <SectionCallToAction
    type="1-col"
    :cta="{
      title: 'Deploy Globally in Minutes',
      descriptionRawMarkdown: 'Experience the power of **edge computing** with our platform.',
      link: '/demo',
      linkLabel: 'Watch Demo'
    }"
    :backgroundPattern="{ style: 'square', size: '24px' }"
  />
</template>
```

## Markdown Support

Both `content.descriptionRawMarkdown` and `cta.descriptionRawMarkdown` support markdown:

- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Links**: `[text](url)`
- **Line breaks**: Double line breaks for paragraphs

## Styling

The component uses:

- **Background Colors**:
  - Default: Neutral-900
  - Orange theme: Orange-500
  - Black theme: Neutral-900
- **Background Patterns**: GridPattern component with dots or square patterns
- **Typography**: Sora font family with responsive sizing
- **Colors**: Context-aware text colors based on theme
- **Spacing**: Responsive padding (p-6 on mobile, p-12 on desktop)
- **Border Radius**: Rounded corners (rounded-md)

## Responsive Behavior

- **Mobile**: Single column layout, stacked content
- **Desktop (lg+)**: Multi-column layouts where applicable
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
