# Hero2Column

A two-column hero section component with background pattern support, markdown content, and flexible button configurations. Perfect for landing pages and product showcases.

## Features

- **Two-Column Layout**: Content on left, image on right with responsive stacking
- **Background Patterns**: Dots or square grid patterns with customizable size and opacity
- **Markdown Support**: Rich text descriptions with markdown formatting
- **Multiple Buttons**: Support for up to 3 CTA buttons
- **Responsive Design**: Adapts from mobile to desktop layouts
- **Flexible Spacing**: Configurable bottom margin options

## Props

| Prop                     | Type                       | Required | Default                           | Description                               |
| ------------------------ | -------------------------- | -------- | --------------------------------- | ----------------------------------------- |
| `title`                  | `string`                   | Yes      | -                                 | Main hero title                           |
| `overline`               | `string`                   | No       | -                                 | Small text displayed above title          |
| `descriptionRawMarkdown` | `string`                   | No       | -                                 | Description in markdown format            |
| `buttons`                | `Hero2ColumnButtonProps[]` | No       | `[]`                              | Array of button configs (max 3 displayed) |
| `image`                  | `string`                   | No       | -                                 | Hero image URL                            |
| `id`                     | `string`                   | No       | -                                 | HTML id attribute                         |
| `bottomSpacing`          | `string`                   | No       | `mb-24`                           | Bottom margin spacing class               |
| `backgroundPattern`      | `object`                   | No       | `{ style: 'dots', size: '48px' }` | Background pattern configuration          |

### Bottom Spacing Options

| Value   | Description               |
| ------- | ------------------------- |
| `mb-0`  | No bottom margin          |
| `mb-6`  | Small bottom margin       |
| `mb-12` | Medium bottom margin      |
| `mb-24` | Large bottom margin       |
| `mb-48` | Extra large bottom margin |

### Background Pattern

```typescript
interface BackgroundPattern {
  style: 'dots' | 'square' // Pattern type
  size: '12px' | '24px' | '48px' // Grid size
}
```

### Hero2ColumnButtonProps

```typescript
interface Hero2ColumnButtonProps {
  label: string // Button text
  size?: 'small' | 'large' // Button size
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
  href: string // Link URL
  icon?: string // PrimeIcons class
  theme?: string // Theme variant
  customClass?: string // Custom CSS classes
}
```

## Usage

### Basic Hero

```vue
<template>
  <Hero2Column
    title="Build faster with Azion"
    descriptionRawMarkdown="The edge platform that **accelerates** your applications and reduces latency by up to 90%."
    :buttons="[
      { label: 'Get Started', type: 'primary', href: '/signup', icon: 'pi pi-chevron-right' },
      { label: 'Learn More', type: 'secondary', href: '/docs' }
    ]"
    image="/images/hero-image.png"
  />
</template>

<script setup>
  import Hero2Column from '@/blocks/Hero2Column'
</script>
```

### With Overline

```vue
<template>
  <Hero2Column
    overline="Edge Computing"
    title="Deploy at the edge in seconds"
    descriptionRawMarkdown="Build and deploy applications closer to your users with our **global edge network**."
    :buttons="[{ label: 'Start Free Trial', type: 'primary', href: '/trial' }]"
    image="/images/edge-network.png"
  />
</template>
```

### Custom Background Pattern

```vue
<template>
  <Hero2Column
    title="Enterprise Solutions"
    descriptionRawMarkdown="Scale your infrastructure with confidence."
    :backgroundPattern="{ style: 'square', size: '24px' }"
    image="/images/enterprise.png"
  />
</template>
```

### Minimal Hero

```vue
<template>
  <Hero2Column
    title="Welcome to Azion"
    descriptionRawMarkdown="Experience the power of edge computing."
    bottomSpacing="mb-12"
  />
</template>
```

## Markdown Support

The `descriptionRawMarkdown` prop supports full markdown syntax:

- **Bold text**: `**bold**` or `__bold__`
- **Italic text**: `*italic*` or `_italic_`
- **Links**: `[text](url)`
- **Line breaks**: Double line breaks for paragraphs
- **Lists**: Ordered and unordered lists

### Example with Markdown

```vue
<template>
  <Hero2Column
    title="Get Started Today"
    descriptionRawMarkdown="Join thousands of developers building **faster applications** with our platform.\n\n- Deploy in under 60 seconds\n- Global edge network\n- [Learn more](/docs)"
  />
</template>
```

## Button Configuration

Buttons support various types and configurations:

```vue
<template>
  <Hero2Column
    title="Multiple CTAs"
    :buttons="[
      {
        label: 'Primary Action',
        type: 'primary',
        href: '/signup',
        icon: 'pi pi-chevron-right',
        theme: 'light'
      },
      {
        label: 'Secondary Action',
        type: 'secondary',
        href: '/docs'
      },
      {
        label: 'Learn More',
        type: 'link',
        href: '/about'
      }
    ]"
  />
</template>
```

**Note**: Only the first 3 buttons will be displayed.

## Layout Structure

The component uses a two-column grid layout:

- **Left Column (50% on desktop)**: Contains title, overline, description, and buttons
- **Right Column (50% on desktop)**: Contains the hero image
- **Mobile**: Stacks vertically with content first, then image

## Styling

The component uses:

- **Background**: GridPattern component with customizable patterns
- **Typography**:
  - Overline: Orange-500, Proto Mono font, uppercase
  - Title: White, Sora font, responsive display sizes
  - Description: Neutral-200, Sora font
- **Colors**:
  - Text: White and neutral variants
  - Accent: Orange-500 for overline
- **Spacing**: Responsive padding (p-6 on mobile, p-12 on desktop)

## Responsive Behavior

- **Mobile**: Single column, stacked layout, centered content
- **Tablet (md+)**: Two-column layout with image on right
- **Typography**: Scales from mobile to desktop display sizes
- **Spacing**: Adaptive padding and margins

## Accessibility

- Semantic HTML5 `<section>` element
- Proper heading hierarchy (h1 for title)
- Alt text support for images (uses title as fallback)
- Keyboard-accessible buttons
- Screen reader friendly content structure

## Dependencies

- **GridPattern**: Background pattern component
- **Button**: Button component for CTAs
- **Markdown Service**: Parses markdown in descriptions
- **Tailwind CSS**: For styling and responsive design
