# QuoteCarousel

## Purpose

Component QuoteCarousel

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `data` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `numVisible` | `Number` | `1` | - | No description |
| `numScroll` | `Number` | `1` | - | No description |
| `autoplayInterval` | `Number` | `3500` | - | No description |

## Slots

| Slot | Description |
|------|-------------|
| `item` | item slot |

## Dependencies

### External
- vue
- primevue/carousel

### Internal
- ../quote

## Usage Example

```vue
<template>
  <QuoteCarousel
    :data="[]"
  >
  </QuoteCarousel>
</template>
```

## Related Links

- [TypeScript Definitions](./QuoteCarousel.d.ts)
- [Component Implementation](./QuoteCarousel.vue)
- [Export Module](./quotecarousel.js)
- [Package Configuration](./package.json)
