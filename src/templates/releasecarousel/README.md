# ReleaseCarousel

## Purpose

Component ReleaseCarousel

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `data` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `numVisible` | `Number` | `3` | - | No description |
| `numScroll` | `Number` | `3` | - | No description |
| `autoplayInterval` | `Number` | `5000` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `item` | item slot |

## Dependencies

### External
- vue
- primevue/carousel

### Internal
- ../cardrelease

## Usage Example

```vue
<template>
  <ReleaseCarousel
    :data="[]"
  >
  </ReleaseCarousel>
</template>
```

## Related Links

- [TypeScript Definitions](./ReleaseCarousel.d.ts)
- [Component Implementation](./ReleaseCarousel.vue)
- [Export Module](./releasecarousel.js)
- [Package Configuration](./package.json)
