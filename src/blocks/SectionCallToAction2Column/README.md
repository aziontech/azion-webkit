# SectionCallToAction2Column

A two-column call-to-action section block component with background patterns and markdown support. Perfect for conversion-focused sections with additional content context.

## Features

- **Two-Column Layout**: 70-30 split layout (70% CTA, 30% content)
- **Background Patterns**: Dots or square grid patterns with customizable size and opacity
- **Markdown Integration**: Built-in markdown parsing for rich text content
- **Flexible Content**: Support for overline, title, description, and buttons in both columns
- **Theme Variants**: Dark theme with neutral colors
- **Responsive Design**: Adapts to different screen sizes

## Props

| Prop                | Type        | Required | Default                           | Description                        |
| ------------------- | ----------- | -------- | --------------------------------- | ---------------------------------- |
| `id`                | `string`    | No       | -                                 | HTML id attribute                  |
| `type`              | `string`    | No       | `'70-30'`                         | Layout type variant                |
| `content`           | `CardProps` | No       | -                                 | Content card (left/secondary card) |
| `cta`               | `CardProps` | Yes      | -                                 | Main CTA card (right/main card)    |
| `backgroundPattern` | `object`    | No       | `{ style: 'dots', size: '12px' }` | Background pattern configuration   |

### Layout Types

| Type    | Description                              |
| ------- | ---------------------------------------- |
| `70-30` | Two-column layout (70% CTA, 30% content) |

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

### Two-Column Layout

```vue
<template>
  <SectionCallToAction2Column
    type="70-30"
    :content="{
      overline: 'Need enterprise solutions?',
      title: 'Not sure which plan is right for you?',
      descriptionRawMarkdown:
        'Select from a range of plans, from **free to enterprise**, tailored to your specific requirements and scale.',
      linkLabel: 'Explore Plans',
      link: 'https://www.azion.com/pricing'
    }"
    :cta="{
      overline: 'Get Started',
      title: 'Deploy in minutes',
      descriptionRawMarkdown:
        'Experience the power of **edge computing** with our global infrastructure.',
      linkLabel: 'Start Free Trial',
      link: 'https://console.azion.com/signup'
    }"
    :backgroundPattern="{ style: 'dots', size: '12px' }"
  />
</template>

<script setup>
  import SectionCallToAction2Column from '@/blocks/SectionCallToAction2Column'
</script>
```

### With Custom Target

```vue
<template>
  <SectionCallToAction2Column
    :content="{
      overline: 'Learn More',
      title: 'Explore Our Documentation',
      descriptionRawMarkdown: 'Discover how to **build faster applications** with our platform.',
      linkLabel: 'View Docs',
      link: 'https://docs.azion.com',
      target: '_blank'
    }"
    :cta="{
      overline: 'Get Started',
      title: 'Start Building Today',
      descriptionRawMarkdown: 'Get started with our **free tier** and scale as you grow.',
      linkLabel: 'Create Account',
      link: '/signup',
      target: '_self'
    }"
  />
</template>
```

### Custom Background Pattern

```vue
<template>
  <SectionCallToAction2Column
    :content="{
      overline: 'Edge Computing',
      title: 'Build at the Edge',
      descriptionRawMarkdown: 'Deploy applications **closer to users** for improved performance.',
      linkLabel: 'Learn More',
      link: '/docs'
    }"
    :cta="{
      overline: 'Get Started',
      title: 'Deploy Globally in Minutes',
      descriptionRawMarkdown: 'Experience the power of **edge computing** with our platform.',
      linkLabel: 'Watch Demo',
      link: '/demo'
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
  - Content card: Neutral-900
  - CTA card: Neutral-900 with grid pattern overlay
- **Background Patterns**: GridPattern component with dots or square patterns (light-gray, 0.1 opacity)
- **Typography**: Sora font family with responsive sizing
- **Colors**:
  - Content card: Orange overline, neutral-200 title, neutral-400 description
  - CTA card: Orange overline, white title, neutral-400 description
- **Spacing**: Responsive padding (p-6 on mobile, p-12 on desktop)
- **Border Radius**: Rounded corners (rounded-md)
- **Grid Layout**: 10-column grid on desktop (3 columns for content, 7 columns for CTA)

## Responsive Behavior

- **Mobile**: Single column layout, stacked content
- **Desktop (lg+)**: Two-column layout (30% content, 70% CTA)
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
