# SectionCallToAction

A versatile call-to-action section block component with multiple layout types, background options, and markdown support. Perfect for conversion-focused sections and promotional content.

## Features

- **Multiple Layout Types**: Various CTA layouts including 2-column and short variants
- **Background Support**: Custom background images and colors
- **Markdown Integration**: Built-in markdown parsing for rich text content
- **Flexible Content**: Support for overline, title, description, and buttons
- **Theme Variants**: Orange and neutral color schemes
- **Responsive Design**: Adapts to different screen sizes

## Props

| Prop      | Type     | Required | Default | Description                                    |
| --------- | -------- | -------- | ------- | ---------------------------------------------- |
| `id`      | `string` | No       | -       | HTML id attribute                              |
| `type`    | `string` | No       | -       | Layout type variant                            |
| `content` | `Object` | No       | -       | Additional content for 2-column layouts       |
| `cta`     | `Object` | Yes      | -       | Main CTA content (title, description, etc.)   |
| `backgroundImage` | `string` | No | -   | Background image URL                           |

### Content Interface

```typescript
interface Content {
  overline?: string
  title: string
  description: string // Supports markdown
  link?: string
  linkLabel?: string
}
```

### CTA Interface

```typescript
interface CTA {
  overline?: string
  title: string
  description: string // Supports markdown
  link?: string
  linkLabel?: string
}
```

## Layout Types

| Type              | Description                                    |
| ----------------- | ---------------------------------------------- |
| `2-col-70-30`     | Two-column layout (70% CTA, 30% content)     |
| `short`           | Compact single-column layout                  |
| `short-orange`    | Compact layout with orange theme              |

## Usage

### Basic CTA

```vue
<template>
  <SectionCallToAction
    :cta="{
      overline: 'Get Started Today',
      title: 'Ready to accelerate your applications?',
      description: 'Join thousands of developers building **faster applications** with our edge platform.',
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
      description: 'Deploy applications **closer to users** for improved performance.',
      link: '/docs',
      linkLabel: 'Learn More'
    }"
    :cta="{
      title: 'Start Building Today',
      description: 'Get started with our **free tier** and scale as you grow.',
      link: '/signup',
      linkLabel: 'Create Account'
    }"
  />
</template>
```

### With Background Image

```vue
<template>
  <SectionCallToAction
    type="short-orange"
    backgroundImage="/images/cta-background.jpg"
    :cta="{
      title: 'Deploy Globally in Minutes',
      description: 'Experience the power of **edge computing** with our platform.',
      link: '/demo',
      linkLabel: 'Watch Demo'
    }"
  />
</template>
```

### Compact Orange Theme

```vue
<template>
  <SectionCallToAction
    type="short-orange"
    :cta="{
      overline: 'Limited Time',
      title: '50% Off First Year',
      description: 'Special pricing for **new customers**. No setup fees.',
      link: '/pricing',
      linkLabel: 'View Pricing'
    }"
  />
</template>
```

## Styling

The component uses:

- **Background Colors**: 
  - Default: Neutral variants (bg-neutral-900)
  - Orange theme: Orange gradients and accents
- **Typography**: Sora font family with responsive sizing
- **Colors**: Context-aware text colors based on theme
- **Spacing**: Responsive padding and gaps
- **Border Radius**: Rounded corners for modern appearance

## Responsive Behavior

- **Mobile**: Single column layout, stacked content
- **Desktop (md+)**: Multi-column layouts where applicable
- **Typography**: Scales from mobile to desktop sizes
- **Spacing**: Adaptive padding and margins

## Markdown Support

Both `content.description` and `cta.description` support markdown:

- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Links**: `[text](url)`
- **Line breaks**: Double line breaks for paragraphs

## Background Images

When `backgroundImage` is provided:
- Applied as CSS background-image
- Responsive sizing and positioning
- Overlay effects for text readability
- Proper contrast maintenance

## Accessibility

- Semantic `<section>` element
- Proper heading hierarchy
- Keyboard-accessible buttons and links
- Screen reader friendly content structure
- Sufficient color contrast ratios

## Dependencies

- **Overline Component**: For styled overline text
- **Button Component**: For CTA buttons
- **Markdown Parser**: Built-in markdown processing
- **Tailwind CSS**: For styling and responsive design
