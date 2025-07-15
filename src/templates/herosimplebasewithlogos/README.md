# HeroSimpleBaseWithLogos

## Purpose

Component HeroSimpleBaseWithLogos

## Props

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `overline` | `String` | `() => ''` | - | No description |
| `titleTag` | `String` | `() => 'h1'` | - | No description |
| `title` | `String` | - | - | No description |
| `description` | `String` | `() => ''` | - | No description |
| `descriptionRawHtml` | `String` | `() => ''` | - | No description |
| `logosTitle` | `String` | `() => ''` | - | No description |
| `logos` | `Array` | `() => []` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `content` | content slot |

## Dependencies

### Internal
- ../herobase
- ../contentlogo

## Usage Example

```vue
<template>
  <HeroSimpleBaseWithLogos
  >
  </HeroSimpleBaseWithLogos>
</template>
```

## Related Links

- [TypeScript Definitions](./HeroSimpleBaseWithLogos.d.ts)
- [Component Implementation](./HeroSimpleBaseWithLogos.vue)
- [Export Module](./herosimplebasewithlogos.js)
- [Package Configuration](./package.json)
