# HeroHome

## Purpose

Component HeroHome - Hero section with title, description, buttons and logos.
Migrated from templates to blocks structure for better organization.

## Props

### Required

| Prop       | Type     | Description    |
| ---------- | -------- | -------------- |
| `titleTag` | `String` | HTML tag for title (h1, h2, etc.) |
| `logos`    | `Array`  | Array of logo configurations |

### Optional

| Prop                 | Type     | Default    | Values | Description    |
| -------------------- | -------- | ---------- | ------ | -------------- |
| `id`                 | `String` | `() => ''` | -      | Optional component ID |
| `bannerNews`         | `Object` | `{}`       | -      | Optional banner news configuration |
| `overline`           | `String` | `() => ''` | -      | Overline text above title |
| `title`              | `String` | `() => ''` | -      | Main hero title (supports HTML) |
| `description`        | `String` | `() => ''` | -      | Hero description text |
| `descriptionRawHtml` | `String` | `() => ''` | -      | Raw HTML description (alternative to description) |
| `logosTitle`         | `String` | `() => ''` | -      | Title for logos section |
| `buttons`            | `Array`  | `() => []` | -      | Array of button configurations (supports Button component props) |
| `margin`             | `String` | `'none'`   | `'none'`, `'small'`, `'default'`, `'large'` | Margin configuration |
| `bottomSpacing`      | `String` | `'mb-24'`  | -      | Bottom margin spacing |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `title`   | title slot   |
| `actions` | actions slot |
| `content` | content slot |

## Dependencies

### Internal

- ../../templates/herobase
- ../../components/Button/Button.vue
- ../../templates/contentlogo

## Usage Example

```vue
<template>
  <!-- Basic usage -->
  <HeroHome
    titleTag="h1"
    title="Welcome to Azion"
    description="Build and deploy at the edge"
    :logos="logoArray"
    :buttons="buttonArray"
  />

  <!-- With custom spacing -->
  <HeroHome
    titleTag="h1"
    title="Welcome to Azion"
    description="Build and deploy at the edge"
    :logos="logoArray"
    :buttons="buttonArray"
    bottomSpacing="mb-32"
    margin="large"
  />
</template>

<script setup>
import HeroHome from '../blocks/HeroHome'

const logoArray = [
  { imageSrc: '/logo1.svg' },
  { imageSrc: '/logo2.svg' }
]

const buttonArray = [
  {
    label: 'Get Started',
    link: '/signup',
    type: 'primary'
  },
  {
    label: 'Learn More',
    link: '/docs',
    type: 'secondary'
  }
]
</script>
```

## Related Links

- [TypeScript Definitions](./HeroHome.d.ts)
- [Component Implementation](./HeroHome.vue)
- [Export Module](./index.js)
