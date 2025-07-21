# SectionQuoteAvatar

## Purpose

Component SectionQuoteAvatar

## Props

### Required

| Prop    | Type     | Description    |
| ------- | -------- | -------------- |
| `text`  | `String` | No description |
| `image` | `String` | No description |

### Optional

| Prop             | Type      | Default       | Values | Description    |
| ---------------- | --------- | ------------- | ------ | -------------- |
| `data`           | `Array`   | `() => []`    | -      | No description |
| `border`         | `Boolean` | `() => true`  | -      | No description |
| `disableDegrade` | `Boolean` | `() => false` | -      | No description |
| `author`         | `String`  | -             | -      | No description |
| `button`         | `Object`  | -             | -      | No description |

## Dependencies

### Internal

- ../contentquoteavatar

## Usage Example

```vue
<template>
  <SectionQuoteAvatar
    :text=""exemplo""
    :image=""exemplo""
  >
  </SectionQuoteAvatar>
</template>
```

## Related Links

- [TypeScript Definitions](./SectionQuoteAvatar.d.ts)
- [Component Implementation](./SectionQuoteAvatar.vue)
- [Export Module](./sectionquoteavatar.js)
- [Package Configuration](./package.json)
