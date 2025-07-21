# CardBlog

## Purpose

cardblog

## Props

### Required

| Prop          | Type     | Description    |
| ------------- | -------- | -------------- |
| `title`       | `String` | No description |
| `description` | `String` | No description |
| `link`        | `String` | No description |

### Optional

| Prop               | Type     | Default    | Values        | Description    |
| ------------------ | -------- | ---------- | ------------- | -------------- |
| `imgSrc`           | `String` | -          | -             | No description |
| `imgAlt`           | `String` | -          | -             | No description |
| `authors`          | `Object` | -          | -             | No description |
| `date`             | `String` | -          | -             | No description |
| `estimateReadTime` | `String` | -          | -             | No description |
| `direction`        | `String` | `'column'` | `column\|row` | No description |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `header`  | header slot  |
| `content` | content slot |

## Dependencies

### External

- primevue/card
- primevue/avatar
- primevue/avatargroup

## Usage Example

```vue
<template>
  <CardBlog
    :title=""exemplo""
    :description=""exemplo""
    :link=""exemplo""
  >
  </CardBlog>
</template>
```

## Related Links

- [TypeScript Definitions](./CardBlog.d.ts)
- [Component Implementation](./CardBlog.vue)
- [Export Module](./cardblog.js)
- [Package Configuration](./package.json)
