# HeaderSearchDialog

## Purpose

Component HeaderSearchDialog

## Props

### Optional
| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `algoliaAppId` | `String` | - | - | No description |
| `algoliaApiKey` | `String` | - | - | No description |
| `algoliaIndex` | `Array` | - | - | No description |
| `algoliaModel` | `Array` | - | - | No description |
| `inputPlaceholder` | `String` | `'Search Azion'` | - | No description |

## Events

| Event | Description |
|-------|-------------|
| `close` | close event |
| `click` | click event |

## Dependencies

### External
- vue
- primevue/button

### Internal
- ../aisdialog/AlgoliaDialog.vue

## Usage Example

```vue
<template>
  <HeaderSearchDialog
  >
  </HeaderSearchDialog>
</template>
```

## Related Links

- [TypeScript Definitions](./HeaderSearchDialog.d.ts)
- [Component Implementation](./HeaderSearchDialog.vue)
- [Export Module](./headersearchdialog.js)
- [Package Configuration](./package.json)
