# ProductHero

A flexible two-column hero section component designed for product pages. Features content on one side and an image/visual on the other, with support for features list, multiple CTAs, and flexible layouts.

## Features

- **Two-column layout** with responsive design
- **Reversible layout** - image on left or right
- **Features list** with customizable icons
- **Multiple CTAs** - supports up to 3 buttons
- **Theme support** - light and dark modes
- **Flexible spacing** options
- **Custom visual slot** for advanced use cases
- **TypeScript support** with full type definitions

## Props

| Prop             | Type                                        | Default         | Description                      |
| ---------------- | ------------------------------------------- | --------------- | -------------------------------- |
| `title`          | `string`                                    | **required**    | Main heading text                |
| `subtitle`       | `string`                                    | `undefined`     | Description/subtitle text        |
| `overline`       | `string`                                    | `undefined`     | Small text above title           |
| `features`       | `ProductHeroFeature[]`                      | `[]`            | Array of feature items           |
| `buttons`        | `ProductHeroButtonProps[]`                  | `[]`            | Array of button configs (max 3)  |
| `image`          | `string`                                    | `undefined`     | Image URL                        |
| `imageAlt`       | `string`                                    | `undefined`     | Image alt text                   |
| `imageClass`     | `string`                                    | `undefined`     | Additional CSS classes for image |
| `layout`         | `'image-right' \| 'image-left'`             | `'image-right'` | Image position                   |
| `spacing`        | `'none' \| 'small' \| 'default' \| 'large'` | `'default'`     | Vertical padding                 |
| `titleSize`      | `'default' \| 'large'`                      | `'default'`     | Title size variant               |
| `additionalInfo` | `string`                                    | `undefined`     | Text below buttons               |
| `id`             | `string`                                    | `undefined`     | HTML id attribute                |

## Types

```typescript
interface ProductHeroFeature {
  text: string
  icon?: string // PrimeVue icon class, default: 'pi pi-check-circle'
}

interface ProductHeroButtonProps {
  label: string
  size?: 'small' | 'large'
  type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
  href: string
  icon?: string
  theme?: string
  customClass?: string
}
```

## Usage

### Basic Example

```vue
<template>
  <ProductHero
    title="Build faster with Azion"
    subtitle="The edge platform that accelerates your applications"
    image="/images/product-screenshot.png"
    :buttons="[
      { label: 'Get Started', type: 'primary', href: '/signup' },
      { label: 'Learn More', type: 'secondary', href: '/docs' }
    ]"
  />
</template>

<script setup>
  import ProductHero from '@/blocks/ProductHero'
</script>
```

### With Features List

```vue
<template>
  <ProductHero
    overline="Edge Computing"
    title="Deploy at the edge in seconds"
    subtitle="Build and deploy applications closer to your users"
    :features="[
      { text: 'Global edge network with 100+ locations' },
      { text: 'Deploy in under 60 seconds' },
      { text: 'Automatic SSL certificates' },
      { text: '99.99% uptime SLA' }
    ]"
    :buttons="[{ label: 'Start Free Trial', type: 'primary', href: '/trial' }]"
    image="/images/edge-network.png"
    layout="image-left"
  />
</template>
```

### Custom Icons

```vue
<template>
  <ProductHero
    title="Enterprise Security"
    :features="[
      { text: 'DDoS protection', icon: 'pi pi-shield' },
      { text: 'Web Application Firewall', icon: 'pi pi-lock' },
      { text: 'Bot management', icon: 'pi pi-verified' }
    ]"
    image="/images/security.png"
  />
</template>
```

### Custom Visual Slot

```vue
<template>
  <ProductHero
    title="Interactive Demo"
    subtitle="See it in action"
  >
    <template #visual>
      <video
        autoplay
        loop
        muted
        class="w-full rounded-lg"
      >
        <source
          src="/videos/demo.mp4"
          type="video/mp4"
        />
      </video>
    </template>
  </ProductHero>
</template>
```

### With Additional Info

```vue
<template>
  <ProductHero
    title="Start your free trial"
    subtitle="No credit card required"
    :buttons="[{ label: 'Sign Up Free', type: 'primary', href: '/signup' }]"
    additionalInfo="14-day free trial • Cancel anytime"
    image="/images/trial.png"
  />
</template>
```

## Layout Options

### Image Right (Default)

Content on the left, image on the right.

```vue
<ProductHero layout="image-right" ... />
```

### Image Left

Image on the left, content on the right.

```vue
<ProductHero layout="image-left" ... />
```

## Spacing Options

- **`none`** - No vertical padding
- **`small`** - Minimal padding (8-16px)
- **`default`** - Standard padding (12-28px)
- **`large`** - Maximum padding (16-36px)

## Styling

The component uses:

- **Tailwind CSS** for responsive layout and spacing
- **PrimeVue icons** for feature checkmarks
- **Azion orange** (#F3652B) for accent colors
- **Font Sora** for headings
- **Font Proto Mono** for overline text

## Responsive Behavior

- **Mobile**: Single column, centered content
- **Tablet**: Maintains single column with larger spacing
- **Desktop (lg+)**: Two-column grid layout with image positioning

## Accessibility

- Semantic HTML5 `<section>` element
- Proper heading hierarchy
- Alt text support for images
- Keyboard-accessible buttons
- ARIA-compliant icon usage
