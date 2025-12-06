# Hero

A centered hero section block component with optional animated background, overline text, and call-to-action buttons. Perfect for landing pages and product showcases.

## Features

- **Centered Layout**: Content-focused design with centered text alignment
- **Animated Background**: Optional canvas-based background animation
- **Flexible Spacing**: Multiple padding options for different contexts
- **Button Integration**: Support for multiple CTA buttons with various styles
- **Responsive Typography**: Adaptive text sizing across devices
- **TypeScript Support**: Full type definitions included

## Props

| Prop                 | Type                                        | Required | Default     | Description                        |
| -------------------- | ------------------------------------------- | -------- | ----------- | ---------------------------------- |
| `id`                 | `string`                                    | No       | `undefined` | HTML id attribute                  |
| `title`              | `string`                                    | Yes      | -           | Main hero heading                  |
| `subtitle`           | `string`                                    | No       | `undefined` | Supporting description text        |
| `overline`           | `string`                                    | No       | `undefined` | Small text above title             |
| `buttons`            | `Array<HeroButtonProps>`                    | No       | `[]`        | Array of CTA buttons (max 3)       |
| `spacing`            | `'none' \| 'small' \| 'default' \| 'large'` | No       | `'default'` | Vertical padding                   |
| `animatedBackground` | `boolean`                                   | No       | `false`     | Enable canvas background animation |

### HeroButtonProps Interface

```typescript
interface HeroButtonProps {
  label: string
  size?: 'small' | 'large'
  icon?: string
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
  theme?: 'light' | 'dark'
  href: string
  [key: string]: any // Additional button props
}
```

## Usage

### Basic Example

```vue
<template>
  <Hero
    title="Build at the Edge"
    subtitle="Deploy applications closer to your users with our global edge network"
    :buttons="[
      { label: 'Get Started', type: 'primary', href: '/signup' },
      { label: 'Learn More', type: 'secondary', href: '/docs' }
    ]"
  />
</template>

<script setup>
  import Hero from '@/blocks/Hero'
</script>
```

### With Overline and Animation

```vue
<template>
  <Hero
    overline="Edge Computing Platform"
    title="Deploy in Seconds, Scale Globally"
    subtitle="Experience the fastest way to build and deploy applications worldwide"
    :animatedBackground="true"
    spacing="large"
    :buttons="ctaButtons"
  />
</template>

<script setup>
  const ctaButtons = [
    {
      label: 'Start Free Trial',
      type: 'primary',
      size: 'large',
      href: '/trial'
    },
    {
      label: 'View Demo',
      type: 'link',
      icon: 'pi pi-play',
      href: '/demo'
    }
  ]
</script>
```

### Minimal Hero

```vue
<template>
  <Hero
    title="Simple. Fast. Reliable."
    spacing="small"
  />
</template>
```

## Spacing Options

- **`none`** - No vertical padding
- **`small`** - Minimal padding for compact layouts
- **`default`** - Standard padding for most use cases
- **`large`** - Maximum padding for prominent sections

## Button Limitations

The component automatically limits buttons to a maximum of 3 for optimal UX and layout consistency.

## Styling

The component uses:

- **Background**: Transparent with optional animated canvas
- **Typography**: Sora font family for headings
- **Colors**: White text with orange accent for overline
- **Layout**: Centered content with responsive max-widths
- **Spacing**: Responsive gaps and padding

## Responsive Behavior

- **Mobile**: Compact typography (display-2), single column buttons
- **Desktop (md+)**: Large typography (display-1), horizontal button layout
- **Max Width**: Constrained to maintain readability

## Animated Background

When `animatedBackground` is enabled:

- Canvas element renders behind content
- Requires custom animation implementation
- Automatically handles responsive sizing
- Z-index properly layered with content

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- Keyboard-accessible buttons
- Screen reader friendly text content
- Proper color contrast ratios
- Focus management for interactive elements

## Dependencies

- **Button Component**: Internal button component for CTAs
- **Tailwind CSS**: For styling and responsive design
- **Vue 3**: Composition API and reactivity
