# HeroBase

## Purpose

Component HeroBase

## Props

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `bannerNews` | `Object` | - | - | No description |
| `overline` | `String` | `() => ''` | - | No description |
| `isReverse` | `Boolean` | `() => false` | - | No description |
| `titleTag` | `String` | `'h1'` | - | No description |
| `title` | `String` | - | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `justify` | `String` | - | `center` | No description |
| `align` | `String` | - | `center` | No description |
| `isCentralized` | `Boolean` | `() => false` | - | No description |
| `isDisplay` | `Boolean` | `() => false` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Default component content |

## Dependencies

### Internal
- ../overline
- ../banner

## Usage Example

```vue
<template>
  <HeroBase
  >
    Component content
  </HeroBase>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroBase.d.ts)
- [Component Implementation](./HeroBase.vue)
- [Export Module](./herobase.js)
- [Package Configuration](./package.json)
