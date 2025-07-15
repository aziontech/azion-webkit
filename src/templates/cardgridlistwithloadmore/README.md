# CardGridListWithLoadMore

## Purpose

Component CardGridListWithLoadMore

## Props

### Required
| Prop | Type | Description |
|------|------|-------------|
| `data` | `Array` | No description |

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `buttonText` | `String` | `'Load more'` | - | No description |
| `loadMoreNumber` | `Number` | `12` | - | No description |

## Events

| Event | Description |
|-------|-------------|
| `click` | click event |

## Dependencies

### External
- primevue/button
- vue

### Internal
- ../cardgridlist/CardGridList.vue

## Usage Example

```vue
<template>
  <CardGridListWithLoadMore
    :data="[]"
  >
  </CardGridListWithLoadMore>
</template>
```

## Related Links

- [TypeScript Definitions](./CardGridListWithLoadMore.d.ts)
- [Component Implementation](./CardGridListWithLoadMore.vue)
- [Export Module](./cardgridlistwithloadmore.js)
- [Package Configuration](./package.json)
